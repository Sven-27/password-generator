import RangeSlider from "react-range-slider-input";

function length({number, setNumber}) {
  return (
    <div className="w-full flex flex-col mb-7">
      <label id="volume-label" htmlFor="length" className="text-grey-200 flex justify-between items-center mb-4 text-[clamp(16px,4vw,18px)]">
        Character Length
        <span id="number" className="mr-2 text-green text-[clamp(24px,4vw,32px)]">{number === 0 ? number : number[1]}</span>
      </label>
      <RangeSlider
        id="length"
        className="single-thumb w-full"
        name="length"
        min={0}
        max={64}
        step={1}
        value={number}
        defaultValue={["0","0"]}
        thumbsDisabled={[true, false]}
        onInput={setNumber}
        aria-labelledby="volume-label"
        tabindex={[-1, 0]}
      />
    </div>
  )
}

export default length