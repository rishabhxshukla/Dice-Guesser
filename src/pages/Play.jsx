import { useEffect, useState } from "react";
import Box, { selected } from "../components/Box";
import Rules from "../components/Rules";

function Play() {
  /* Variables */
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false);
  const [randomNumber, setRandomNumber] = useState(1);
  const [selectedNumber, setSelectedNumber] = useState();

  /* Function to get and set the random number */
  function generateRandomNumber(min, max) {
    setRandomNumber(Math.floor(Math.random() * (max - min) + min));
    setSelectedNumber(selected);
  }

  /* Game Logic */
  function game() {
    if (selectedNumber == randomNumber) {
      setScore((prev) => prev + 10);
    } else {
      setScore((prev) => prev - 2);
    }
  }

  useEffect(() => {
    if (selected) {
      game();
    }
  }, [selectedNumber, randomNumber]);

  return (
    <>
      {/* HEADER */}
      <div className="xxs:flex-col xxs:gap-10 xxs:px-2 flex justify-between py-4 md:flex-row md:px-20">
        <div>
          <h1 className="text-center text-7xl font-semibold">{score}</h1>
          <h3 className="mt-1 text-center text-xl font-medium">Total Score</h3>
        </div>

        <div className="xxs:mx-auto text-center sm:m-0">
          <h1 className="mb-4 text-xl font-medium">Guess Number</h1>

          <div className="flex gap-2">
            <Box number={1} />
            <Box number={2} />
            <Box number={3} />
            <Box number={4} />
            <Box number={5} />
            <Box number={6} />
          </div>
        </div>
      </div>

      {/* DICE IMAGE */}
      <div className="xxs:mt-6 flex h-screen flex-col items-center gap-5 md:mt-16">
        <img
          src={`/src/assets/dice_${randomNumber}.png`}
          alt="Random Guess"
          onClick={() => {
            generateRandomNumber(1, 7);
          }}
          className="xxs:w-[25%] cursor-pointer lg:w-fit"
        />

        <h1 className="text-2xl font-bold">Click on dice to roll</h1>

        <button
          onClick={() => setScore(0)}
          className="rounded-lg bg-black px-14 py-2 text-lg text-white"
        >
          Reset Score
        </button>

        <button
          onClick={() => setShowRules((prev) => !prev)}
          className="rounded-lg border-2 border-gray-500 px-14 py-1 text-lg"
        >
          Show Rules
        </button>

        {showRules && <Rules />}
      </div>
    </>
  );
}

export default Play;
