import {useState} from "react";
import Result from "./components/Result";
import Length from "./components/Length";
import Include from "./components/Include";
import Strength from "./components/Strength";
import Generate from "./components/Generate";
import { StrengthObject } from "./strength";

function App() {
  const [strength, setStrength] = useState(StrengthObject.empty);
  const [length, setLength] = useState(0);


  return (
    <main className="w-[343px] sm:w-[540px]">
      <h1 className="text-[clamp(1rem,4vw,1.5rem)] text-grey-700 leading-20 sm:leading-32 text-center">Password Generator</h1>
      <div className="flex flex-col gap-4">
        <Result />
        <div className="w-full bg-grey-800 p-4">
          <Length number={length} setNumber={setLength} />
          <Include />
          <Strength strength={strength} />
          <Generate />
        </div>
      </div>
    </main>
  )
}

export default App
