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
  const [include, setInclude] = useState({
    uppercase: false,
    lowercase: false,
    numbers: false,
    symbols: false
  });

  return (
    <main className="w-[343px] sm:w-[540px]">
      <h1 className="text-[clamp(1rem,4vw,1.5rem)] text-grey-700 leading-20 sm:leading-32 text-center">Password Generator</h1>
      <div className="flex flex-col gap-4">
        <Result />
        <div className="w-full bg-grey-800 p-4">
          <Length 
            number={length} 
            setNumber={setLength} 
          />
          <Include 
            uppercase={include.uppercase}     
            lowercase={include.lowercase} 
            numbers={include.numbers} 
            symbols={include.symbols} 
            setUppercase={(e) => setInclude({...include, uppercase: e.target.checked})} 
            setLowercase={(e) => setInclude({...include, lowercase: e.target.checked})} 
            setNumbers={(e) => setInclude({...include, numbers: e.target.checked})} 
            setSymbols={(e) => setInclude({...include, symbols: e.target.checked})}
           />
          <Strength strength={strength} />
          <Generate />
        </div>
      </div>
    </main>
  )
}

export default App
