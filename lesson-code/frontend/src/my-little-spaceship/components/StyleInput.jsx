import { Field, ErrorMessage } from "formik"

const styles = ["illustration", "cartoonish", "pixelArt", "scifi"]

export const StyleInput = () => {
  return (
    <div className="style">
      <label>Style</label>
      <Field as="select" name="style">
        <option value="">---</option>
        {styles.map((style) => (
          <option key={style} value={style}>
            {style}
          </option>
        ))}
      </Field>
      <ErrorMessage name="style" component="span" style={{ color: "red" }} />
    </div>
  )
}
