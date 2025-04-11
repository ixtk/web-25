import { useState } from "react"
import "./App.css"

export function DearNextVisitor() {
  const [previousNote, setPreviousNote] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  const sendNote = async (event) => {
    event.preventDefault()
    setError("")

    const formData = new FormData(event.target)

    const note = formData.get("note")

    if (note.length < 10) {
      setError("Note should be at least 10 characters")
      return
    }

    setLoading(true)
    const response = await fetch("http://localhost:3333/note", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        content: note
      })
    })

    const json = await response.json()

    setPreviousNote(json.previousNote.content)
    setLoading(false)
  }

  return (
    <>
      <main className="container">
        <form onSubmit={sendNote}>
          <h2>
            {previousNote ? "Thank you for your message" : "Give one, take one"}
          </h2>
          <p>
            {previousNote ? (
              "Your message has been saved and will be revealed to the next visitor once they have written a message of their own."
            ) : (
              <i>
                There is a message waiting that has been written just for you...
              </i>
            )}
          </p>
          {previousNote ? (
            <p>
              Now it is time for you to see what has been written for you. Once
              you leave this page, the message will disappear forever...
            </p>
          ) : (
            <>
              <p>
                This message has been written for your eyes only by the last
                person who visited this page. You will be the only person to
                read this message.
              </p>
              <p>
                Before you read it, you must first leave a message of your own
                for the next visitor.
              </p>
            </>
          )}
          {previousNote ? (
            <p className="prevNote">{previousNote}</p>
          ) : (
            <>
              <fieldset role="group">
                <textarea
                  disabled={loading}
                  name="note"
                  placeholder="Dear next visitor..."
                />
                <button disabled={loading}>
                  {loading ? "Sending..." : "Send"}
                </button>
              </fieldset>
              {error && <span>{error}</span>}
            </>
          )}
        </form>
      </main>
    </>
  )
}
