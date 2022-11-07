import React from "react";

import style from "./Total.module.scss";

interface IProps {
  total: number;
}

const Total: React.FC<IProps> = React.memo(({ total }) => {
  return (
    <h3 className={style.container}>
      Total: <span>{total}</span>
    </h3>
  );
});

export default Total;
