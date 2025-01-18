import React from "react";

const MagicButton2 = ({
  title,
  icon,
  position = "center",
  handleClick,
}: {
  title: string;
  icon?: React.ReactNode;
  position?: string;
  handleClick?: () => void;
}) => {
  return (
    <button
      onClick={handleClick} // Attach the onClick event handler
      className="p-[3px] relative" // Strict padding and relative positioning
    >
      {/* Gradient border */}
      <div className="absolute inset-0 bg-transparent rounded-lg" />
      {/* Inner button */}
      <div
        className={`flex items-center justify-${position} px-8 py-2 bg-black-300 rounded-[6px] relative group transition duration-200 text-white hover:text-accentt hover:bg-black-200`}
      >
        {/* Optional icon */}
        {icon && <span className="mr-2">{icon}</span>}
        {/* Title */}
        {title}
      </div>
    </button>
  );
};

export default MagicButton2;
