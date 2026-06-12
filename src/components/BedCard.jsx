// components/BedCard.jsx

export default function BedCard({
  bed,
  selected,
  onSelect,
}) {
  const getStatusStyles = () => {
    switch (bed.status) {
      case "available":
        return "bg-green-100 border-green-500 hover:bg-green-200";

      case "pending":
        return "bg-yellow-100 border-yellow-500 cursor-not-allowed";

      case "occupied":
        return "bg-red-100 border-red-500 cursor-not-allowed";

      default:
        return "bg-gray-100 border-gray-300";
    }
  };

  return (
    <button
      disabled={bed.status !== "available"}
      onClick={() => onSelect(bed)}
      className={`
        relative
        border-2
        rounded-xl
        p-4
        h-32
        transition-all
        ${getStatusStyles()}
        ${
          selected?.bedNumber === bed.bedNumber
            ? "ring-4 ring-blue-500"
            : ""
        }
      `}
    >
      <div className="text-4xl mb-2">
        🛏️
      </div>

      <h3 className="font-semibold">
        {bed.bedNumber}
      </h3>

      <span
        className={`
          text-xs
          px-2
          py-1
          rounded-full
          text-white
          ${
            bed.status === "available"
              ? "bg-green-500"
              : bed.status === "pending"
              ? "bg-yellow-500"
              : "bg-red-500"
          }
        `}
      >
        {bed.status}
      </span>
    </button>
  );
}