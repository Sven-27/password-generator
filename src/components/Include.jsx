function include() {
  return (
    <>
      <div className="flex items-center  mb-4">
        <input type="checkbox" id="uppercase" />
        <label for="uppercase" className="ml-2 text-grey-200 text-[clamp(16px,4vw,18px)]">Include Uppercase Letters</label>
      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" id="lowercase" />
        <label for="lowercase" className="ml-2 text-grey-200 text-[clamp(16px,4vw,18px)]">Include Lowercase Letters</label>
      </div>
      <div className="flex items-center mb-4">
        <input type="checkbox" id="numbers" />
        <label for="numbers" className="ml-2 text-grey-200 text-[clamp(16px,4vw,18px)]">Include Numbers</label>
      </div>
      <div className="flex items-center">
        <input type="checkbox" id="symbols" />
        <label for="symbols" className="ml-2 text-grey-200 text-[clamp(16px,4vw,18px)]">Include Symbols</label>
      </div>
    </>
  )
}

export default include