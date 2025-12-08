function include() {
  return (
    <>
      <div className="flex items-center  mb-4">
        <input type="checkbox" id="uppercase" />
        <label htmlFor="uppercase" className="ml-2 text-grey-200 text-[clamp(16px,4vw,18px)]">Include Uppercase Letters</label>
      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" id="lowercase" />
        <label htmlFor="lowercase" className="ml-2 text-grey-200 text-[clamp(16px,4vw,18px)]">Include Lowercase Letters</label>
      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" id="numbers" />
        <label htmlFor="numbers" className="ml-2 text-grey-200 text-[clamp(16px,4vw,18px)]">Include Numbers</label>
      </div>
      <div className="flex items-center">
        <input type="checkbox" id="symbols" />
        <label htmlFor="symbols" className="ml-2 text-grey-200 text-[clamp(16px,4vw,18px)]">Include Symbols</label>
      </div>
    </>
  )
}

export default include