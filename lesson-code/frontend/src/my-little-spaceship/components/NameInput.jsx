import { Field, ErrorMessage } from "formik"

export const NameInput = () => {
  return (
    <div className="name">
      <label htmlFor="spaceshipName">Name</label>
      <Field id="spaceshipName" type="text" name="spaceshipName" />
      <ErrorMessage
        name="spaceshipName"
        component="span"
        style={{ color: "red" }}
      />
    </div>
  )
}
