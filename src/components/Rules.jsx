function Rules() {
  return (
    <div className="xxs:w-[85%] mx-auto rounded-xl bg-red-200 p-10 md:w-[60%] lg:w-[45%]">
      <h1 className="text-2xl font-semibold">How to play dice game</h1>
      <br />
      <ul className="list-disc text-lg">
        <li>Select any number.</li>
        <li>Click on the dice image.</li>
        <li>
          If the selected number is equal to the dice number you will get 10
          points.
        </li>
        <li>
          If you make a wrong guess, then 2 point will be dedcuted from your
          score.
        </li>
      </ul>
    </div>
  );
}

export default Rules;
