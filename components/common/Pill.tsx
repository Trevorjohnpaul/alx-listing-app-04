// components/common/Pill.tsx
import React from "react";

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Pill: React.FC<PillProps> = ({ label, active = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-sm px-3 py-1 rounded-full border focus:outline-none ${
        active
          ? "bg-indigo-600 text-white border-indigo-600"
          : "bg-white text-gray-700 border-gray-200"
      }`}
      aria-pressed={active}
    >
      {label}
    </button>
  );
};

export default Pill;
