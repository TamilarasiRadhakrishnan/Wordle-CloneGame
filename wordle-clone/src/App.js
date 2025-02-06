import React, { useState } from "react";
import { WORDS } from "./wordList";
import WordGrid from "./components/WordGrid";
import InputBox from "./components/InputBox";
import GameStatus from "./components/GameStatus";
import NewGameButton from "./components/NewGameButton";
import { wordList } from './wordList';


const getRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)];

const App = () => {
  const [word, setWord] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [message, setMessage] = useState("");
  const MAX_ATTEMPTS = 6;

  const checkGuess = (input) => {
    if (input.length !== 5) {
      setMessage("Guess must be 5 letters!");
      return;
    }

    const guessArray = input.split("");
    const wordArray = word.split("");

    const feedback = guessArray.map((letter, i) => {
      if (wordArray[i] === letter) return "green";
      if (wordArray.includes(letter)) return "yellow";
      return "gray";
    });

    const newGuesses = [...guesses, { word: input, feedback }];
    setGuesses(newGuesses);

    if (input === word) {
      setMessage("🎉 You won! Click 'New Game' to play again.");
    } else if (newGuesses.length >= MAX_ATTEMPTS) {
      setMessage(`😢 Game Over! The word was ${word}`);
    }
  };

  const resetGame = () => {
    setWord(getRandomWord());
    setGuesses([]);
    setMessage("");
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-2xl font-bold">Wordle Clone</h1>
      <WordGrid guesses={guesses} />
      <InputBox onSubmit={checkGuess} isGameOver={message.includes("won") || message.includes("Game Over")} />
      <GameStatus message={message} />
      <NewGameButton onReset={resetGame} />
    </div>
  );
};

export default App;
