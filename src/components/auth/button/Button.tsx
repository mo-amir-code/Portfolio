import React from "react";

const Button = ({ name }: { name: string }) => {
  return (
    <button className="px-4 py-2 w-full smooth_transition hover:shadow-md active:scale-95 font-medium rounded-md bg-primary-color">
      {name}
    </button>
  );
};

export default Button;