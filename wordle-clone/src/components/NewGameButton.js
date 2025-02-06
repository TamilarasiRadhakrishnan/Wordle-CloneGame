import React from "react";

const NewGameButton = ({ onReset }) => {
  return (
    <button onClick={onReset} className="mt-2 p-2 bg-gray-500 text-white">
      New Game
    </button>
  );
};

export default NewGameButton;
