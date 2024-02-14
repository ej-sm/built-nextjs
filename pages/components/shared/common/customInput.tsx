"use client";

import React, { useState } from "react";

type CustomInputProps = {
  label?: string;
  style?: string;
  value?: string;
  inputType: string;
  placeholder?: string;
  onChange?: (e: any) => void;
  name?: string;
  error?: string;
};

const CustomInput = (props: CustomInputProps) => {
  const {
    label,
    inputType,
    placeholder,
    name,
    style,
    error,
    onChange,
    value,
  } = props;

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <div className={`flex flex-col w-full  ${style}`}>
        {label && (
          <label
            htmlFor="input-group-1"
            className="block mb-2 text-lg font-medium text-gray-400"
          >
            {label}
          </label>
        )}
        <div className="relative bg-transparent">
          <input
            type={inputType}
            className="text-black  text-md bg-[#f3f4f6]  
                        focus:border-primary focus:outline-none block w-full  px-5 py-3"
            placeholder={placeholder}
            name={name}
            id={name}
            value={value}
            onChange={onChange}
          />
          {error && <span className="text-sm text-red-500">{error}</span>}
        </div>
      </div>
    </>
  );
};

export default CustomInput;
