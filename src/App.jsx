import { useState } from 'react'
import './App.css'


function App() {
const [id,useId] = useState("")
const [advice,setAdvice] = useState("")
  async function getAdvice(){
     try {
    const adviceResponse = await fetch("https://api.adviceslip.com/advice")
    const adviceData = await adviceResponse.json();
    console.log(adviceData.slip.id)
    console.log(adviceData.slip.advice)
    useId(adviceData.slip.id)
    setAdvice(adviceData.slip.advice) 
}
     catch (error) {
        console.log("fetch is not working ",error)
    }
}

  return (
    <>
        <div className="container h-screen flex justify-center items-center px-4">
      <div className="advice-main max-w-md min-h-80 px-5 flex flex-col items-center">
          <div className="advice-id-head flex justify-center mt-10 gap-1 text-xs tracking-wider">
              <div className="advice-id-heading">ADVICE</div>
              <div className="advice-id"># <span className="id">{id}</span></div>
          </div>
          <div className="advice-content text-white mt-6">
              “<span className="content">{advice}</span> ”
          </div>
          <div className="image-divider mt-5 pt-5"><img src="./images/pattern-divider-desktop.svg" alt="" /></div>
          <button className="adviceBtn w-16 h-16 flex justify-center items-center rounded-full hover-glow transition duration-300" onClick={getAdvice}>
              <img src="./images/icon-dice.svg" alt="" />
          </button>
      </div>
  </div>
    </>
  )
}

export default App
