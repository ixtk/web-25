import { Field, ErrorMessage } from "formik"

const materials = ["crystal", "plastic", "glass", "paper"]

export const MaterialInput = () => {
  return (
    <div className="material">
      <label>Material</label>
      <div>
        {materials.map((material) => (
          <label key={material}>
            <Field type="radio" name="material" value={material} />
            {material}
          </label>
        ))}
        <ErrorMessage
          name="material"
          component="span"
          style={{ color: "red" }}
        />
      </div>
    </div>
  )
}
