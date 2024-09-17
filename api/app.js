const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const Stripe = require("stripe");
const morgan = require("morgan");
const {
  authRoutes,
  userRoutes,
  billingRoutes,
  gigRoutes,
} = require("./routes");
const Gig = require("./models/Gig");

if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: ".env",
  });
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-11-15",
});

const app = express();

app.use(
  cors({
    origin: [process.env.CLIENT_URL],
  })
);

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    const sig = req.headers["stripe-signature"];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SIGN;

    let event;

    try {
      event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
      console.log(`⚠️  Webhook signature verification failed.`, err.message);
      return res.sendStatus(400);
    }

    switch (event.type) {
      case "invoice.payment_succeeded":
        const invoice = event.data.object;

        if (invoice.subscription) {
          const subscriptionMetadata = invoice.lines.data[0]?.metadata;
          const { gigId } = subscriptionMetadata;

          // update gig status
          const updatedGig = await Gig.findByIdAndUpdate(gigId, {
            $set: { status: "active" },
          });

          console.log("updatedGig active", updatedGig);
        }
        break;
      case "customer.subscription.deleted":
        if (invoice.subscription) {
          const subscriptionMetadata = invoice.lines.data[0]?.metadata;
          const { gigId } = subscriptionMetadata;

          // update gig status
          const updatedGig = await Gig.findByIdAndUpdate(gigId, {
            $set: { status: "deactive" },
          });
          console.log("updatedGig deactive", updatedGig);
        }
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.sendStatus(200);
  }
);

app.use(morgan("dev"));
app.use(express.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

// set public folder
app.use(express.static("public"));

app.post("/create-subscription", async (req, res) => {
  const { email, paymentMethodId, price, gigId } = req.body;

  try {
    const customer = await stripe.customers.create({
      payment_method: paymentMethodId,
      email,
      invoice_settings: {
        default_payment_method: paymentMethodId,
      },
    });

    const product = await stripe.products.create({
      name: "Dynamic Pricing Product",
      description: "A product with dynamic pricing.",
    });

    const subscription = await stripe.subscriptions.create({
      customer: customer.id,
      items: [
        {
          price_data: {
            currency: "usd",
            product: product.id,
            unit_amount: price * 100,
            recurring: { interval: "month" },
          },
        },
      ],
      metadata: {
        gigId,
      },
      expand: ["latest_invoice.payment_intent"],
    });

    res.status(200).json({
      subscriptionId: subscription.id,
      clientSecret: subscription.latest_invoice?.payment_intent?.client_secret,
    });
  } catch (error) {
    console.error("Error creating subscription:", error);
    res.status(400).json({ error: error?.message });
  }
});

// all routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/billings", billingRoutes);
app.use("/api/gigs", gigRoutes);
app.use("/", (req, res) => {
  res.send("Welcome");
});

// database connection
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => console.log("database connection successful!"))
  .catch((err) => console.log("error", err));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
