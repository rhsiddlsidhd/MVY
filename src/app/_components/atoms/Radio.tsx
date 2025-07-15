import React from "react";

interface RadioProps {
  id: string;
  name: string;
  value: string;
  label: React.ReactNode;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Radio = ({
  id,
  name,
  value,
  label,
  checked,
  onChange,
  className,
}: RadioProps) => {
  return (
    <label htmlFor={id} className={`${className}`}>
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        id={id}
        className="appearance-none w-0 h-0 p-0 m-0"
      />
      <span
        className={`block w-full text-center transition-all duration-200 p-2 rounded-xl text-[13px] font-semibold shadow-md ${
          checked
            ? "bg-[#A4A20C] text-black ring-2 ring-[#A4A20C] ring-offset-2 scale-105"
            : "bg-[#f3f4f6] text-[#232526] hover:bg-[#e5e7eb]"
        }`}
      >
        {label}
      </span>
    </label>
  );
};

export default Radio;
