import React from "react";
import { motion } from "framer-motion";

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return (
    <motion.div
      className="grid h-full cursor-pointer select-none place-content-center px-4"
      whileHover="hover"
    >
      {children}
    </motion.div>
  );
};

export default Button;
