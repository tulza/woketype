import { GameSettingsContext } from "@/pages/HomePage";
import { motion } from "framer-motion";
import { useContext } from "react";

type ButtonProps = {
  mode: string;
};

const GamemodeButton = ({ mode }: ButtonProps) => {
  const { gamemode, setGamemode } = useContext(GameSettingsContext);
  const handleSetGamemode = () => {
    setGamemode(String(mode).toLowerCase());
  };

  return (
    <motion.div
      className="grid h-full cursor-pointer select-none place-content-center px-4"
      whileHover="hover"
      onClick={() => {
        handleSetGamemode();
      }}
    >
      <motion.span
        animate={
          String(gamemode).toLowerCase() == String(mode).toLowerCase()
            ? {
                color: "var(--text)",
              }
            : {}
        }
      >
        {mode}
      </motion.span>
    </motion.div>
  );
};

export default GamemodeButton;
