import React from "react";

const WordGrid = ({ guesses }) => {
  return (
    <div className="mt-4 grid gap-2">
      {guesses.map((guess, i) => (
        <div key={i} className="flex space-x-2">
          {guess.word.split("").map((letter, j) => (
            <span key={j} className={`p-2 border ${guess.feedback[j]}`}>
              {letter}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default WordGrid;
