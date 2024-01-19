import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <div className="mx-4 select-none">{children}</div>;
};

export default Button;
