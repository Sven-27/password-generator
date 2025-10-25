import Result from "./components/result";
import Create from "./components/create";

function App() {

  return (
    <main className="w-[343px] sm:w-[540px]">
      <h1 className="text-[clamp(1rem,4vw,1.5rem)] text-grey-700 leading-20 sm:leading-32 text-center">Password Generator</h1>
      <div className="flex flex-col gap-4">
      <Result />
      <Create />
      </div>
    </main>
  )
}

export default App
