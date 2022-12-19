import React from "react";
import { CartContext } from "../CartContext";
import { useEffect, useState, useContext } from "react";
import CheckoutForm from "../components/cards/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Container } from "react-bootstrap";

const stripePromise = loadStripe("pk_test_51M9GfrAkLxkRHMJPwuJqmN5xyhulpvaP32s9FmAg5A3qqoWHBFkEgWbeYxOmSlpKjxQ1X7zjkxuJ4ionhuQCml7Y00ZrEXFN18");
const BASE_URL = "http://localhost:8080/api/stripe"

const CheckOutPage = () => {
  const [clientSecret, setClientSecret] = useState("");
  const appearance = {theme: "stripe",};
  const options = {clientSecret,appearance,};
  const { getTotalPrice } = useContext(CartContext);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(`${BASE_URL}/create-payment-intent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: `${getTotalPrice()}` }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  return (
    <Container className="mt-5">
      <Container className="d-flex align-items-center justify-content-center">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
      </Container>
    </Container>
  );
};

export default CheckOutPage;
