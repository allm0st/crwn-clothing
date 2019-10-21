import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripePublishableKey = 'pk_test_zZjI69E4Xx0UlDO6HgLp7dYQ00OHgRSO1Z';

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;

  const onToken = token => {
    console.log(token);
    alert('Payment was successful!');
  };

  return (
    <StripeCheckout
      name="CRWN Clothing"
      label="Pay now"
      panelLabel="Pay now"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={stripePrice}
      token={onToken}
      stripeKey={StripePublishableKey}
    />
  );
};

export default StripeCheckoutButton;
