import Button from "@/components/Button";
import Spacer from "@components/Spacer";
import ImageTextElem from "./ImageTextElem";

const TypeSettingsBar = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex h-10 w-max items-center rounded-lg bg-element p-2 text-sm">
          <div className="mx-6 select-none">
            <ImageTextElem text="Gamemode" />
          </div>
          <Spacer />
          <Button>
            <ImageTextElem text="TypeSettingsBar" />
          </Button>
          <Button>
            <ImageTextElem text="TypeSettingsBar" />
          </Button>
          <Button>
            <ImageTextElem text="TypeSettingsBar" />
          </Button>
        </div>
        <div className="flex h-10 w-max items-center rounded-lg bg-element p-2 text-sm">
          <div className="mx-6 select-none">
            <ImageTextElem text="Mods" />
          </div>
          <Spacer />
          <Button>
            <ImageTextElem text="hidden" />
          </Button>
          <Button>
            <ImageTextElem text="flip" />
          </Button>
          <Button>
            <ImageTextElem text="flashlight " />
          </Button>
        </div>
      </div>
    </>
  );
};

export default TypeSettingsBar;
