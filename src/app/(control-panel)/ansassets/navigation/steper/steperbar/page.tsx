"use client";
import CheckoutStepper from "./steper";
const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => <div>Provide your contact details.</div>,
  },
  {
    name: "Shipping Info",
    Component: () => <div>Enter your shipping address.</div>,
    optional: true,
  },
  {
    name: "Payment",
    Component: () => <div>Complete payment for your order.</div>,
  },
  {
    name: "Delivered",
    Component: () => <div>Your order has been delivered.</div>,
  },
];

function App() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>

      <CheckoutStepper
        stepsConfig={CHECKOUT_STEPS}
        linear={true}
        orientation="horizontal"
        validateStep={(step) => {
          // example validation
          if (step === 0) return true;
          return true;
        }}
        onStepChange={(s) => console.log("Step:", s)}
      />
    </div>
  );
}

export default App;
