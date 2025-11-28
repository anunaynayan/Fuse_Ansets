"use client";

import { useRef } from "react";
import CheckoutStepper from "./steper";

const CHECKOUT_STEPS = [
  {
    name: "Customer Info",
    Component: () => (
      <div className="p-4 bg-white shadow rounded">
        Provide your contact details.
      </div>
    ),
  },
  {
    name: "Shipping Info",
    Component: () => (
      <div className="p-4 bg-white shadow rounded">
        Enter your shipping address.
      </div>
    ),
  },
  {
    name: "Payment",
    Component: () => (
      <div className="p-4 bg-white shadow rounded">
        Complete payment for your order.
      </div>
    ),
  },
  {
    name: "Delivered",
    Component: () => (
      <div className="p-4 bg-white shadow rounded">
        Your order has been delivered.
      </div>
    ),
  },
];

export default function SteperDemoApp() {
  const stepperRef = useRef<any>();

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-semibold">Checkout</h2>

      <CheckoutStepper ref={stepperRef} stepsConfig={CHECKOUT_STEPS} />

      {/* Just Example of manual control (optional) */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={() => stepperRef.current.back()}
          className="px-4 py-2 rounded bg-gray-300"
        >
          Back
        </button>
        <button
          onClick={() => stepperRef.current.next()}
          className="px-4 py-2 rounded bg-blue-600 text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}
