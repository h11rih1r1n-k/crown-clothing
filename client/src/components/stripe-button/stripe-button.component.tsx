import StripeCheckout from "react-stripe-checkout";
import Logosvg from "../../assets/logo.svg";
import axios from "axios";
import {StripeType} from '@types';
import "./stripe-button.styles.scss";

function StripeButton({ price }: StripeType) {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51KNNUiLYj8OWUPTiosrK8FgiYuwqkLgcoBHUrozxf0798uLGhwie3hDOE3I0UPyR00RmxUmHsLie6lSct6pLDxRn00yhK4eLYi";

  const onToken = <T,>(token: T) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((responce) => {
        alert("Payment Successful");
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        alert(
          "There was an issue with your payment. Please make sure you use provided credentials"
        );
      });
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
