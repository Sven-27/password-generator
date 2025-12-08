function length() {
  return (
    <div className="w-full flex flex-col mb-4">
      <label htmlFor="length" className="text-grey-200 flex justify-between items-center mb-4 text-[clamp(16px,4vw,18px)]">
        Character Length
        <span id="number" className="mr-2 text-green text-[clamp(24px,4vw,32px)]">0</span>
      </label>
      <input
        type="range"
        id="length"
        className="w-full appearance-none  bg-black-200 h-2 slider"
        name="length"
        min="0"
        max="64"
      />
    </div>
  )
}

export default length