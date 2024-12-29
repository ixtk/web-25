import { useState } from "react"

export const SelectOther = () => {
  const [selected, setSelected] = useState("")

  return (
    <div>
      <select
        onChange={(event) => {
          setSelected(event.target.value)
        }}
      >
        <option value="">Select an option</option>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
        <option value="other">Other</option>
      </select>
      {selected === "other" && (
        <input type="text" placeholder="Please specify" />
      )}
    </div>
  )
}
