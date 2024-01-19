import Button from "@/components/Button";
import Spacer from "@components/Spacer";
import ImageTextElem from "./ImageTextElem";

const TypeSettingsBar = () => {
  return (
    <>
      <div className="text-primary flex flex-col gap-4 text-sm">
        <div className=" flex h-10 w-max items-center rounded-lg bg-element p-2 ">
          <div className="mx-6 select-none">
            <ImageTextElem text="Gamemode" className="text-text" />
          </div>
          <Spacer />
          <Button>
            <ImageTextElem text="Normal" />
          </Button>
          <Button>
            <ImageTextElem text="Chase" />
          </Button>
          <Button>
            <ImageTextElem text="Can you remember?" />
          </Button>
        </div>
        <div className="flex h-10 w-max items-center rounded-lg bg-element p-2">
          <div className="mx-6 select-none">
            <ImageTextElem text="Mods" className="text-text" />
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
