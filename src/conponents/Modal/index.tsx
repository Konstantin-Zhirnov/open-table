import React from "react";

import { useAppDispatch } from "../../redux/hooks";
import { setModal } from "../../redux/modal";

import style from "./Modal.module.scss";

const modalRootElement = document.querySelector("#modal");

interface IProps {
  text: string;
}

const Modal: React.FC<IProps> = ({ text }) => {
  const element = React.useMemo(() => document.createElement("div"), []);

  const dispatch = useAppDispatch();
  const handleClick = () => {
    dispatch(setModal(false));
  };

  React.useEffect(() => {
    modalRootElement?.appendChild(element);

    return () => {
      modalRootElement?.removeChild(element);
    };
  });

  return (
    <div className={style.container}>
      <div className={style.content}>
        <button onClick={handleClick}>&times;</button>
        {text}
      </div>
    </div>
  );
};

export default Modal;
