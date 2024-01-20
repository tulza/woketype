import { GamemodeTypes } from "@/types/GamemodeTypes";

export const modsData = (gamemode: GamemodeTypes) => {
  const modList: string[] | [] = [
    "hidden",
    "flip",
    "flashlight",
    "shake",
    "randomise",
    "blurry",
    "rotate",
    "scatter",
    "mouse type",
  ];
  switch (gamemode) {
    case "normal": {
      const allowed = modList;
      return allowed;
    }
    case "chase": {
      const excludedMods = ["mouse type"];
      const allowed = modList.filter((mod) => !excludedMods.includes(mod));
      return allowed;
    }
    case "can you remember?": {
      const excludedMods = [
        "fullflip",
        "scatter",
        "blurry",
        "rotate",
        "mouse type",
      ];
      const allowed = modList.filter((mod) => !excludedMods.includes(mod));
      return allowed;
    }
    default:
      return [];
  }
};

export default modsData;
