type ElementProps = {
  image?: string;
  text: string;
};

const ImageTextElem = ({ image, text }: ElementProps) => {
  return (
    <div className="flex gap-2">
      {!!image && <img src={image} alt={text} />}
      <p>{text}</p>
    </div>
  );
};

export default ImageTextElem;
