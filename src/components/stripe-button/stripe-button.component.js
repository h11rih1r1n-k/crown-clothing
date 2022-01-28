import React from "react";
import StripeCheckout from "react-stripe-checkout";
import Logosvg from "../../assets/logo.svg";
import "./stripe-button.styles.scss";

function StripeButton({ price }) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KJruESEkyJcVDyiuHy5mMxb20tb1yaPeVedZJ7gk7ruZH4P4gJjQTYaAWQe2bI9XgihsNNTmlhRSDFxnkCY5M50002hhsQzPy";

  const onToken = (token) => {
    alert("Payment Sucessful");
  };

  return (
    <div className="stripe-pay">
      <StripeCheckout
        label="Pay Now"
        name="Fashion Code Ltd."
        billingAddress
        shippingAddress
        image={Logosvg}
        description={`Your total is $${price}`}
        amount={priceForStripe}
        token={onToken}
        stripeKey={publishableKey}
      />
    </div>
  );
}

export default StripeButton;
