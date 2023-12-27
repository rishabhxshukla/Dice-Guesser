import { Link } from "react-router-dom";
import dices from "../assets/dices.png";

function Home() {
  return (
    <div className="xxs:flex-col flex h-screen select-none items-center justify-center sm:flex-row">
      <img
        src={dices}
        alt="Dices"
        className="xxs:w-[80%] pointer-events-none sm:w-[50%] lg:w-[50%] xl:w-fit"
      />
      <div className="xxs:text-center sm:text-end">
        <h1 className="xxs:text-5xl mb-12 font-bold uppercase sm:text-5xl xl:text-8xl">
          Dice Game
        </h1>
        <Link to="/play">
          <button className="rounded-md bg-black px-16 py-2 text-lg text-white hover:bg-[#d13535]">
            Play Now
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
