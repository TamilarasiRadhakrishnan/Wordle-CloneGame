import React, { useState } from "react";

const InputBox = ({ onSubmit, isGameOver }) => {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (input.length === 5) {
      onSubmit(input);
      setInput("");
    }
  };

  return (
    <div className="mt-4 flex flex-col items-center">
      <input
        type="text"
        maxLength="5"
        value={input}
        disabled={isGameOver}
        onChange={(e) => setInput(e.target.value.toLowerCase())}
        className="p-2 border text-center"
      />
      <button
        onClick={handleSubmit}
        disabled={isGameOver}
        className="mt-2 p-2 bg-blue-500 text-white disabled:opacity-50"
      >
        Submit
      </button>
    </div>
  );
};

export default InputBox;
