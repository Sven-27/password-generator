function include({ uppercase, lowercase, numbers, symbols, setUppercase, setLowercase, setNumbers, setSymbols }) {
  return (
    <>
      <div className="flex items-center  mb-4">
        <input type="checkbox" id="uppercase" name="uppercase" checked={uppercase} onChange={setUppercase} />
        <label htmlFor="uppercase" className="ml-2 text-grey-200 text-[clamp(16px,4vw,18px)]">Include Uppercase Letters</label>
      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" id="lowercase" name="lowercase" checked={lowercase} onChange={setLowercase} readOnly />
        <label htmlFor="lowercase" className="ml-2 text-grey-200 text-[clamp(16px,4vw,18px)]">Include Lowercase Letters</label>
      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" id="numbers" name="numbers" checked={numbers} onChange={setNumbers} />
        <label htmlFor="numbers" className="ml-2 text-grey-200 text-[clamp(16px,4vw,18px)]">Include Numbers</label>
      </div>
      <div className="flex items-center">
        <input type="checkbox" id="symbols" name="symbols" checked={symbols} onChange={setSymbols} />
        <label htmlFor="symbols" className="ml-2 text-grey-200 text-[clamp(16px,4vw,18px)]">Include Symbols</label>
      </div>
    </>
  )
}

export default include