import React from "react";

const GameStatus = ({ message }) => {
  return message ? <p className="mt-4 font-bold">{message}</p> : null;
};

export default GameStatus;
