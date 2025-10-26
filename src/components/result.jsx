function result() {
  return (
    <div className="flex items-center w-full bg-grey-900 p-4">
      <input 
        className="w-full bg-transparent outline-none border-none text-white placeholder:text-grey-700 text-[clamp(24px,5vw,32px)]"
        id="result" 
        type="text"  
        readOnly
        placeholder="P4$5W0rD!"
      />
      <img src="./src/assets/images/icon-copy.svg" alt="copy icon" className="cursor-pointer w-[clamp(18px,4vw,24px)]"/>
    </div>
  )
}

export default result