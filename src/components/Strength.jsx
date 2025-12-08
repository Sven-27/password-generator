

function Strength({strength}) {
  return (
    <div className="bg-grey-900 py-4 px-6 mt-6 flex items-center justify-between">
      <p className="text-grey-600 uppercase">Strength</p>
      <div className="flex justify-between ml-4">
        {/* Strength indicator bars */}
        {!strength ? null : strength}
      </div>
    </div>
  )
}

export default Strength