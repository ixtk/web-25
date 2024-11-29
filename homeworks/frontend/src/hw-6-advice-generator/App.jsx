import "./App.css"
import { useState } from "react"

export const AdviceGenerator = () => {
  const [adviceId, setAdviceId] = useState(1)
  const [adviceText, setAdviceText] = useState("Click the button :)")

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
      .then((response) => response.json())
      .then((data) => {
        setAdviceText(data.slip.advice)
        setAdviceId(data.slip.id)
      })
      .catch((error) => {
        console.error("Error fetching advice:", error)
      })
  }

  return (
    <section className="container">
      <h2 className="advice-id">advice#{adviceId}</h2>
      <h1 className="advice-text">"{adviceText}"</h1>
      <div className="separator">
        <div className="line"></div>
        <img src="/images/Group.svg" alt="" />
        <div className="line"></div>
      </div>
      <button onClick={fetchAdvice}>
        <span>🎲</span>
        {/* <img src="/images/icon-dice.svg" alt="" /> */}
      </button>
    </section>
  )
}
