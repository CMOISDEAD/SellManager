import React from "react";

export const Money = ({ title, callback }) => {
  const moneyHandler = (e) => {
    let money = e.target.value;
    callback(money);
  };

  return (
    <>
      <p className="fs-5 text-center">{title}</p>
      <input
        className="form-control mb-2"
        type="text"
        placeholder="$$$"
        onChange={moneyHandler}
      />
    </>
  );
};
