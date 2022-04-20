import "../src/Guesser.css";
import { useState } from "react";

const random = Math.floor(Math.random() * 100);

const Onset = (props: any) => {
  const [attempts, setAttempts] = useState(0);
  const [guess, setStatus] = useState("");

  const checkGuess = (event: any) => {
    event.preventDefault();

    const guess = parseInt(event.target.value);

    if (guess == random) {
      setStatus("You guessed it!");
      setAttempts(0);
    } else if (guess > random) {
      setAttempts(attempts + 1);
      setStatus("Too high!");
    } else if (guess < random) {
      setAttempts(attempts + 1);
      setStatus("Too low!");
    } else {
      setStatus("Please enter a number!");
    }
  };

  const handleEnter = (event: any) => {
    if (event.key === "Enter") {
      checkGuess(event);
    }
  };

  return (
    <div className="onset">
      <div className="onset-container">
        <div className="onset-container-header">
          <div className="onset-container-header-title">
            <h1>Guessing Game.</h1>
          </div>
          <p> Try and guess the number in as few tries as possible!</p>
        </div>

        <form>
          <input
            type="text"
            placeholder="Enter your guess here"
            onKeyDown={handleEnter}
          />
        </form>
      </div>

      <p className="out">{guess}</p>
      <p className="out">Attempts: {attempts}</p>
    </div>
  );
};

export default Onset;
