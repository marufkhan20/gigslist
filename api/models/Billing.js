const { Schema, model } = require("mongoose");

const billingSchema = new Schema(
  {
    user: {
      required: true,
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    cardName: String,
    cardNumber: Number,
    expiryDates: String,
    cvc: Number,
    zipCode: Number,
    country: String,
  },
  { timestamps: true }
);

const Billing = model("Billing", billingSchema);

module.exports = Billing;
