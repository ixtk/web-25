import { useState } from "react"
import "./App.css"

export const TagList = () => {
  const [tags, setTags] = useState([])
  const [text, setText] = useState("")

  const updateTags = (event) => {
    const tagText = event.target.value
    const newTagValue = tagText.slice(0, -1)
    if (!tags.includes(newTagValue) && tagText.includes(",")) {
      setTags([...tags, newTagValue])
      setText("")
    } else {
      setText(tagText)
    }
  }

  const removeTag = (tagNameToDelete) => {
    const newTagList = tags.filter((tag) => {
      if (tag === tagNameToDelete) return false
      else true
    })

    setTags(newTagList)
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
            console.log("current tag is:", tag)
            return (
              <button onClick={() => removeTag(tag)} key={tag} className="tag">
                {tag}
              </button>
            )
          })}
        </p>
      </div>
    </div>
  )
}
