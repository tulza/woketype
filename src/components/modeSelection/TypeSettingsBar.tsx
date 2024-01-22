import GamemodeButton from "@/components/modeSelection/GamemodeButton";
import Spacer from "@/components/modeSelection/Spacer";
import { useContext, useEffect, useState } from "react";
import { GameSettingsContext } from "@/components/pages/HomePage";
import modsData from "@/data/modsData";
import { motion } from "framer-motion";

const TypeSettingsBar = () => {
  const { gamemode } = useContext(GameSettingsContext);
  const [allowedMods, setAllowedMods] = useState<[] | string[]>([]);

  return (
    <>
      <div className="flex flex-col gap-4 text-sm text-primary">
        <GamemodeSelectionBar />
        <ModsSelectionBar />
        <div
          className="flex aspect-square h-10 w-max cursor-pointer items-center rounded-lg bg-element p-2"
          onClick={() => {
            console.log(gamemode);
          }}
        ></div>
      </div>
    </>
  );
};

const GamemodeSelectionBar = () => {
  return (
    <div className=" flex w-max items-center rounded-lg bg-element p-2 ">
      <div className="mx-6 select-none text-text">Gamemodes</div>
      <Spacer />
      <GamemodeButton mode="Normal" />
      <GamemodeButton mode="Chase" />
      <GamemodeButton mode="Can you remember?" />
    </div>
  );
};

const ModsSelectionBar = () => {
  return (
    <div className="flex h-10 w-max items-center rounded-lg bg-element p-2 transition-all">
      <div className="mx-6 select-none">Mods</div>
      <Spacer />
      <motion.div className="flex "></motion.div>
    </div>
  );
};

export default TypeSettingsBar;
