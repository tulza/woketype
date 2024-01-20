import { GameSettingsContext } from "@/pages/HomePage";
import { motion } from "framer-motion";
import { useContext } from "react";
import { ModsType } from "@/types/ModTypes";

type ButtonTypes = {
  mod: string;
};

const GamemodeButton = ({ mod }: ButtonTypes) => {
  return (
    <motion.div
      className="grid h-full cursor-pointer select-none place-content-center px-4"
      whileHover="hover"
      onClick={() => {}}
    >
      <motion.span>{mod}</motion.span>
    </motion.div>
  );
};

export default GamemodeButton;
