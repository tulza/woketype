import { GamemodeTypes } from "@/types/GamemodeTypes";
import { useEffect, useState } from "react";

const useGamemode = () => {
  const [Gamemode, setGamemode] = useState<GamemodeTypes>();
  useEffect(() => {
    console.log(Gamemode);
  }, [Gamemode]);

  return [Gamemode, setGamemode] as const;
};

export default useGamemode;
