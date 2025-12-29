import {useState} from "react";
import Result from "./components/Result";
import Length from "./components/Length";
import Include from "./components/Include";
import Strength from "./components/Strength";
import Errors from "./components/Errors";
import Generate from "./components/Generate";
import { StrengthObject } from "./strength";

function App() {
  const [strength, setStrength] = useState(StrengthObject.empty);
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(0);  
  const [include, setInclude] = useState({
    uppercase: false,
    lowercase: true,
    numbers: false,
    symbols: false
  });
  const [errors, setErrors] = useState("");

   const calculateStrength = () => {
    if(passwordLength[1] > 0 && (include.lowercase || include.uppercase || include.numbers || include.symbols)) setStrength(StrengthObject.tooWeak);
    if(passwordLength[1] > 8 && (include.lowercase && (include.uppercase || include.numbers || include.symbols))) setStrength(StrengthObject.weak);
    if(passwordLength[1] > 16 && (include.lowercase && (include.uppercase && include.numbers) || (include.uppercase && include.symbols) || (include.numbers && include.symbols))) setStrength(StrengthObject.medium);
    if(passwordLength[1] > 24 && include.lowercase && include.uppercase && include.numbers && include.symbols) setStrength(StrengthObject.strong);
  }

  const generatePassword = () => {
    setErrors("");
    if (!include.uppercase && !include.lowercase && !include.numbers && !include.symbols) {
      return setErrors("Invalid password criteria");
    } else if (passwordLength === 0 || passwordLength[1] === 0) {
      return setErrors("Password length cannot be 0");
    } else if (passwordLength === "" || passwordLength[1] === "") {
      return setErrors("Invalid password length");
    }

    let password = "";
    for (let i = 0; i < passwordLength[1]; i++) {
      let choice = random(0, 3);
      if (include.lowercase && choice === 0) {
        password += randomLower();
      } else if (include.uppercase && choice === 1) {
        password += randomUpper();
      } else if (include.symbols && choice === 2) {
        password += randomSymbol();
      } else if (include.numbers && choice === 3) {
        password += random(0, 9);
      } else {
        i--;
      }
    }
    setPassword(password);
    calculateStrength();
  };
  const random = (min = 0, max = 1) => {
    return Math.floor(Math.random() * (max + 1 - min) + min);
  };

  const randomLower = () => {
    return String.fromCharCode(random(97, 122));
  };

  const randomUpper = () => {
    return String.fromCharCode(random(65, 90));
  };

  const randomSymbol = () => {
    const symbols = "~*$%@#^&!?*'-=/,.{}()[]<>";
    return symbols[random(0, symbols.length - 1)];
  };

  return (
    <main className="w-[343px] sm:w-[540px]">
      <h1 className="text-[clamp(1rem,4vw,1.5rem)] text-grey-700 leading-20 sm:leading-32 text-center">Password Generator</h1>
      <div className="flex flex-col gap-4">
        <Result
          password={password}
          copyToClipboard={navigator.clipboard.writeText(password)}
        />
        <div className="w-full bg-grey-800 p-4">
          <Length 
            number={passwordLength} 
            setNumber={setPasswordLength} 
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
          <Strength 
            strength={strength} 
          />
          <Errors 
            errors={errors}
          />
          <Generate  
            generatePassword={generatePassword}
          />
        </div>
      </div>
    </main>
  )
}

export default App
