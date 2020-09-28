import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51HWBDfHlRcvTzvgpwy8n5hmfdAz9vAZHEMRueX4tHYYeA0SG0Lypcptl3Bsegumx57DOviCQGAIaosni4AteFZWn00ufduRQZo';
  const onToken = token => {
    alert('Payment Successful');
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='S Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;