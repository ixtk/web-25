import "./App.css"
import { useState } from "react"

export const WithSeparateStates = () => {
  const [activeUser, setActiveUser] = useState("ron")

  const [ronMessages, setRonMessages] = useState(["Hi ron :))"])
  const [hermioneMessages, setHermioneMessages] = useState([])
  const [harryMessages, setHarryMessages] = useState([])
  const [hagridMessages, setHagridMessages] = useState([])

  const [newMessage, setNewMessage] = useState("")

  const getCurrentUserMessages = () => {
    if (activeUser === "ron") return ronMessages
    else if (activeUser === "hermione") return hermioneMessages
    else if (activeUser === "harry") return harryMessages
    else if (activeUser === "hagrid") return hagridMessages
  }

  const sendMessage = (event) => {
    event.preventDefault()
    if (!newMessage) return

    if (activeUser === "ron") setRonMessages([...ronMessages, newMessage])
    else if (activeUser === "hermione")
      setHermioneMessages([...hermioneMessages, newMessage])
    else if (activeUser === "harry")
      setHarryMessages([...harryMessages, newMessage])
    else if (activeUser === "hagrid")
      setHagridMessages([...hagridMessages, newMessage])

    setNewMessage("")
  }

  const messageList = getCurrentUserMessages().map((message, index) => {
    return (
      <div className="message" key={index}>
        {message}
      </div>
    )
  })

  const buttonList = ["ron", "hermione", "hagrid", "harry"].map(
    (name, index) => {
      return (
        <button
          key={index}
          onClick={() => setActiveUser(name)}
          className={activeUser === name ? "selected" : ""}
        >
          {name}
        </button>
      )
    }
  )

  return (
    <div className="container">
      <div className="sidebar">{buttonList}</div>
      <div className="chat">
        <div className="messages">
          {getCurrentUserMessages().length === 0 ? (
            <span>No messages yet</span>
          ) : (
            messageList
          )}
        </div>
        <form className="input-container">
          <input
            type="text"
            placeholder={`Send a message to ${activeUser}...`}
            value={newMessage}
            onChange={(event) => setNewMessage(event.target.value)}
          />
          <button onClick={sendMessage}>Send</button>
        </form>
      </div>
    </div>
  )
}
