import ModButton from "@/components/ModButton";
import GamemodeButton from "@/components/GamemodeButton";
import Spacer from "@components/Spacer";
import ImageTextElem from "./ImageTextElem";
import { useContext, useEffect, useState } from "react";
import { GameSettingsContext } from "@/components/pages/HomePage";
import modsData from "@/data/modsData";
import { motion } from "framer-motion";

const TypeSettingsBar = () => {
  const { gamemode } = useContext(GameSettingsContext);
  const [allowedMods, setAllowedMods] = useState<[] | string[]>([]);
  useEffect(() => {
    const allowed = modsData(gamemode);
    setAllowedMods(allowed);
  }, [gamemode]);

  return (
    <>
      <div className="flex flex-col gap-4 text-sm text-primary">
        <div className=" flex w-max items-center rounded-lg bg-element p-2 ">
          <div className="mx-6 select-none">
            <ImageTextElem text="Gamemode" className="text-text" />
          </div>
          <Spacer />

          <GamemodeButton mode="Normal" />
          <GamemodeButton mode="Chase" />
          <GamemodeButton mode="Can you remember?" />
        </div>
        <div className="flex h-10 w-max items-center rounded-lg bg-element p-2 transition-all">
          <div className="mx-6 select-none">
            <ImageTextElem text="Mods" className="text-text" />
          </div>
          <Spacer />
          <motion.div className="flex" animate={{ width: "max-content" }}>
            {...allowedMods.map((mod) => <ModButton mod={mod} key={mod} />)}
          </motion.div>
        </div>
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

export default TypeSettingsBar;
