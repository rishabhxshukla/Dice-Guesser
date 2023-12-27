let selected;
function getSelectedNumber(e) {
  selected = Number(e.target.innerText);
}

function Box({ number }) {
  return (
    <div className="flex items-center justify-center">
      <button
        onClick={getSelectedNumber}
        className="xxs:h-12 xxs:w-12 rounded-md border-2 border-gray-500 text-xl font-semibold hover:bg-black hover:text-white sm:h-14 sm:w-14"
      >
        {number}
      </button>
    </div>
  );
}

export { selected };
export default Box;
