import TypeSettingsBar from "@components/TypeSettingsBar";
import { createContext, useState } from "react";
import { GamemodeTypes } from "@/types/GamemodeTypes";

export const GameSettingsContext = createContext<any>(null);
const HomePage = () => {
  const [gamemode, setGamemode] = useState<GamemodeTypes | null>(null);
  const [mods, setMods] = useState<string[]>([]);

  return (
    <GameSettingsContext.Provider
      value={{ gamemode, setGamemode, mods, setMods }}
    >
      <div className="flex h-full flex-col gap-4">
        <div
          id="ContentWrapper"
          className="mx-80 h-full pt-10 outline outline-1 outline-element"
        >
          <div className="mb-10 text-3xl font-bold">
            <span>woketype</span>
          </div>
          <TypeSettingsBar />
        </div>
      </div>
    </GameSettingsContext.Provider>
  );
};

export default HomePage;
