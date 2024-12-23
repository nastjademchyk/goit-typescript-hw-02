import React, { FC } from "react";
import s from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <button className={s.btn} type="submit" onClick={onClick}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
