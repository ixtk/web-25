import { Field, ErrorMessage } from "formik"

const shapes = ["saucer", "rocket", "sphere", "pyramid"]

export const ShapeInput = () => {
  return (
    <div className="shape">
      <label>Shape</label>
      <div>
        {shapes.map((shape) => (
          <label key={shape}>
            <Field type="radio" name="shape" value={shape} />
            {shape}
          </label>
        ))}
        <ErrorMessage name="shape" component="span" style={{ color: "red" }} />
      </div>
    </div>
  )
}
