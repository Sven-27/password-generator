import Length from "./generate/length";
import Include from "./generate/include";
import Generate from "./generate/generate";

function create() {
  return (
    <div className="w-full bg-grey-900 p-4">
      <Length />
      <Include />
      <Generate />
    </div>
  )
}

export default create