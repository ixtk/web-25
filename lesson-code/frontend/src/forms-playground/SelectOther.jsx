export const SelectOther = () => {
  return (
    <div>
      <select>
        <option value="">Select an option</option>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
        <option value="other">Other</option>
      </select>
      <input type="text" placeholder="Please specify" />
    </div>
  )
}
