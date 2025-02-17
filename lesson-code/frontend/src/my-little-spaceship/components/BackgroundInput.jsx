import { Field, ErrorMessage } from "formik"

const backgroundElements = ["nebula", "asteroids", "planets", "stars"]

export const BackgroundInput = () => {
  return (
    <div className="background">
      <label>Background elements</label>
      <div>
        {backgroundElements.map((background) => (
          <label key={background}>
            <Field
              type="checkbox"
              name="backgroundElements"
              value={background}
            />
            {background}
          </label>
        ))}
        <ErrorMessage
          name="backgroundElements"
          component="span"
          style={{ color: "red" }}
        />
      </div>
    </div>
  )
}
