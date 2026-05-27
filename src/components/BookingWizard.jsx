import { useState } from "react";

export default function BookingWizard() {
  const [step, setStep] = useState(1);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow">

      {/* STEP INDICATOR */}
      <div className="flex gap-2 mb-6">
        {[1,2,3].map((s) => (
          <div
            key={s}
            className={`h-2 flex-1 rounded ${
              step >= s ? "bg-blue-600" : "bg-gray-200"
            }`}
          />
        ))}
      </div>

      {/* STEP CONTENT */}
      {step === 1 && (
        <div>
          <h2 className="font-bold">Choose Room</h2>
          <p>Select available room</p>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2 className="font-bold">Personal Info</h2>
          <p>Fill user details</p>
        </div>
      )}

      {step === 3 && (
        <div>
          <h2 className="font-bold">Confirm Booking</h2>
          <p>Review and submit</p>
        </div>
      )}

      {/* BUTTONS */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => setStep(step - 1)}
          disabled={step === 1}
        >
          Back
        </button>

        <button
          onClick={() => setStep(step + 1)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
}