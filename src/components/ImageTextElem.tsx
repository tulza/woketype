import clsx from "clsx";
import { motion } from "framer-motion";

type ElementProps = {
  className?: string;
  image?: string;
  text: string;
};

const ImageTextElem = ({ image, text, className }: ElementProps) => {
  return (
    <motion.div
      className={clsx("flex gap-2", `${className}`)}
      variants={{ hover: { color: "var(--text)" } }}
    >
      {!!image && <img src={image} alt={text} />}
      <p>{text}</p>
    </motion.div>
  );
};

export default ImageTextElem;
