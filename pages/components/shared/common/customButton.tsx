"use client";
import { BtnArrow } from "../../../svgs";
import React from "react";

type ButtonProps = {
  label: string;
  loadingLabel?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  icon?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: string; // New style prop
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  style,
  type,
  loadingLabel,
  disabled,
  loading,
}) => {
  return (
    <div className="my-2 ">
      <button
        className={`flex items-center justify-between gap-4 hover:bg-white hover:text-primary hover:border hover:scale-105 duration-300 transition-all border-primary bg-primary text-white font-semibold md:py-4 py-2 md:px-8 px-4  rounded-full mx-auto text-center ${
          disabled ? "bg-opacity-50 cursor-not-allowed" : ""
        } ${style}`}
        onClick={onClick}
        disabled={disabled}
        type={type || "button"}
      >
        {loading ? loadingLabel : label}
        <BtnArrow />
      </button>
    </div>
  );
};

export default Button;
