

function Strength() {
  return (
    <div className="bg-grey-900 py-4 px-6 mt-6 flex items-center ">
      <p className="text-grey-600 uppercase">Strength</p>
      <div className="">
        {/* Strength indicator bars */}
        <div className="flex gap-2 mt-2">
          <div className=" h-full border border-2 border-grey-200"></div>
          <div className=" h-3 bg-yellow-500"></div>
          <div className=" h-3 bg-green-500"></div>
          <div className="w-[20px] h-3 bg-green-800"></div>
        </div>
      </div>
    </div>
  )
}

export default Strength