// Checkout.js

import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';

const Checkout = () => {
  return (
    <div>
      <h1>Finalize your order</h1>
      <PayPalScriptProvider options={{ "client-id": "your_client_id_here" }}>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "0.01", // A remplacer avec le total
                  },
                },
              ],
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then(details => { // Capture les fonds de la transaction

              alert("Transaction completed by " + details.payer.name.given_name);
            });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
};

export default Checkout;
