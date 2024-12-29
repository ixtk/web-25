import { useState } from "react"
import "./App.css"

export const TagList = () => {
  const [tags, setTags] = useState([])
  const [text, setText] = useState("")

  const updateTags = (event) => {
    const tagText = event.target.value
    if (tagText.includes(",")) {
      setTags([...tags, tagText.slice(0, -1)])
      setText("")
    } else {
      setText(tagText)
    }
  }

  return (
    <div>
      <div>
        <label htmlFor="tags">Tags</label>
        <input type="text" id="tags" value={text} onChange={updateTags} />
      </div>
      <div>
        <p className="tag-container">
          {tags.map((tag) => {
            return (
              <span key={tag} className="tag">
                {tag}
              </span>
            )
          })}
        </p>
      </div>
    </div>
  )
}
