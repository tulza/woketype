import { useState } from "react";
import { GamemodeTypes } from "@/types/GamemodeTypes";

export const Settings = () => {
  const [gamemodeSettings, setGamemode] = useState<GamemodeTypes>({
    normal: true,
    chase: true,
    "can you remember?": true,
  });
};
