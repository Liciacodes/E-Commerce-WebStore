import React from "react";

const Button = ({ label, icon, ...props }) => {
  return (
    <button
      {...props}
      className="bg-black text-white px-6 py-3 flex items-center rounded-lg  text-xl"
    >
      {label} <span className="ml-3">{icon && icon}</span>
    </button>
  );
};

export default Button;
