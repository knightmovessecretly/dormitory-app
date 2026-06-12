// components/BedsGrid.jsx

import { useState } from "react";
import BedCard from "./BedCard";

export default function BedsGrid({ room }) {
  const [selectedBed, setSelectedBed] =
    useState(null);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">
        {room.roomType}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {room.beds.map((bed) => (
          <BedCard
            key={bed.bedNumber}
            bed={bed}
            selected={selectedBed}
            onSelect={setSelectedBed}
          />
        ))}
      </div>

      {selectedBed && (
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-bold text-lg">
            Selected:
          </h3>

          <p>
            {selectedBed.bedNumber}
          </p>

          <button
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg"
          >
            Request Booking
          </button>
        </div>
      )}
    </div>
  );
}