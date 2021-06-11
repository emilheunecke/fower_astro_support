import React from "react";
import { useStore } from "../store/store";

export const Counter = () => {
  const { count, inc, dec } = useStore((state) => state);

  return (
    <div>
      {count}
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <div p6 textXL bgRed200>
        Use fower in HTML tag
      </div>
    </div>
  );
};
