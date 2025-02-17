import { ErrorMessage } from "formik"

const colors = ["red", "blue", "purple", "orange", "cornflowerblue"]

export const ColorInput = ({ setFieldValue }) => {
  return (
    <div className="color">
      <label>Color</label>
      <div>
        {colors.map((col) => (
          <button
            key={col}
            type="button"
            style={{ backgroundColor: col }}
            className="color"
            onClick={() => setFieldValue("color", col)}
          ></button>
        ))}
      </div>
      <ErrorMessage name="color" component="span" style={{ color: "red" }} />
    </div>
  )
}
