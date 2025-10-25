import Length from "./generate/length";
import Include from "./generate/include";
import Generate from "./generate/generate";

function create() {
  return (
    <div>
      <Length />
      <Include />
      <Generate />
    </div>
  )
}

export default create