import React, { FC } from "react";
import s from "./ImageCard.module.css";

interface Image {
  urls: {
    small: string;
  };
  description?: string;
}

interface ImageCardProps {
  image: Image;
  onClick: () => void;
}

const ImageCard: FC<ImageCardProps> = ({ image, onClick }) => {
  return (
    <div onClick={onClick}>
      <img
        src={image.urls.small}
        alt={image.description ?? "Image from Unsplash"}
        className={s.img}
      />
    </div>
  );
};

export default ImageCard;
