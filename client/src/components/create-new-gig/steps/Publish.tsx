import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import CreateNewGigLayout from "../../../layouts/CreateNewGigLayout";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Description from "../Description";
import Section from "../Section";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

interface IProps {
  activeTab: number;
  setActiveTab: (value: number) => void;
  gigId: string;
}

const Publish = ({ activeTab, setActiveTab, gigId }: IProps) => {
  return (
    <CreateNewGigLayout>
      <div className="mt-14 mb-6 border pb-20 rounded p-7">
        <div className="flex flex-col gap-10">
          <Section>
            <Description
              title="Payment"
              description={
                <>
                  Enter your billing info.{" "}
                  <span className="font-semibold">
                    Your posting will expire in 30 days.{" "}
                  </span>
                </>
              }
            />
            <div className="sm:col-span-2 flex flex-col gap-4">
              <h3 className="text-[15px]">Total amount charged: $10.00 USD</h3>
              <Input type="text" placeholder="Cardholder Name" />
              <Input type="number" placeholder="Card Number" />
              <div className="grid sm:grid-cols-2 gap-9">
                <Input type="text" placeholder="MM/YY" />
                <Input type="text" placeholder="CVC" />
                <Input type="text" placeholder="ZIP Code" />
                <Input type="text" placeholder="Country" />
              </div>
            </div>
          </Section>
        </div>

        <Elements stripe={stripePromise}>
          <CheckoutForm gigId={gigId} />
        </Elements>
      </div>

      <div className="flex justify-end flex-col items-end gap-4">
        <Button
          className="py-3 px-4 text-[13px] font-medium"
          onClick={() => setActiveTab(activeTab + 1)}
        >
          Pay & Publish
        </Button>
        <button
          className="text-[15px] font-medium text-primary transition-all hover:text-primary-active"
          onClick={() => setActiveTab(activeTab - 1)}
        >
          Back
        </button>
      </div>
    </CreateNewGigLayout>
  );
};

const CheckoutForm = ({ gigId }: { gigId: string }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [cardholderName, setCardholderName] = useState<string>("");
  const [dynamicPrice, setDynamicPrice] = useState<number>(10); // Example dynamic price

  useEffect(() => {
    setDynamicPrice(10);
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) return;

    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
      billing_details: { name: cardholderName },
    });

    if (error) {
      console.error(error);
      return;
    }

    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_API_URL}/create-subscription`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: "customer@example.com",
          paymentMethodId: paymentMethod?.id,
          price: dynamicPrice || 10,
          gigId,
        }),
      }
    );

    const subscription = await response.json();

    if (subscription.error) {
      console.error(subscription.error);
    } else {
      const { clientSecret } = subscription;
      const confirmResult = await stripe.confirmCardPayment(clientSecret);

      if (confirmResult.error) {
        console.error(confirmResult.error);
      } else {
        console.log("Subscription successfully created!");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Cardholder Name"
        value={cardholderName}
        onChange={(e) => setCardholderName(e.target.value)}
      />
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Subscribe
      </button>
    </form>
  );
};

export default Publish;
