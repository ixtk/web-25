import { useFormik } from "formik"
import { string, boolean, object, array } from "yup"
import "./App.css"

/*
const validateForm = (values) => {
  const errors = {};

  if (!values.fullName) {
    errors.fullName = "Full name is required";
  } else if (values.fullName.trim().length < 3) {
    errors.fullName = "Minimum 3 characters";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (/\S+@\S+\.\S+/.test(values.email) === false) {
    errors.email = "Invalid email format";
  }

  if (!values.roomType) {
    errors.roomType = "Room type is required";
  }

  if (!values.termsAccepted) {
    errors.termsAccepted = "Accept terms to continue";
  }

  return errors;
};
*/

const formInitialValues = {
  fullName: "",
  email: "",
  roomType: "single",
  termsAccepted: false,
  amenities: []
}

const submitForm = (values, submitProps) => {
  setTimeout(() => {
    console.log("Saving", values)
    submitProps.setSubmitting(false)
  }, 1500)
}

const formSchema = object({
  fullName: string().min(3).max(20).required(),
  email: string()
    .matches(/\S+@\S+\.\S+/, "Invalid email format")
    .min(4)
    .required(),
  roomType: string().oneOf(["single", "double", "suite"]).required(),
  termsAccepted: boolean().oneOf([true], "Please accept terms and conditions"),
  amenities: array().of(string().min(3)).optional()
})

export function BookerForm() {
  const formik = useFormik({
    initialValues: formInitialValues,
    validationSchema: formSchema,
    onSubmit: submitForm
  })

  const amenities = [
    { displayText: "WiFi", value: "WiFi" },
    { displayText: "Breakfast", value: "Breakfast" },
    { displayText: "Parking", value: "Parking" }
  ]

  return (
    <form className="container" onSubmit={formik.handleSubmit}>
      <fieldset>
        <h1>Booker 🏠</h1>
        <div className="input-container">
          <div>
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              type="text"
              {...formik.getFieldProps("fullName")}
            />
            {formik.touched.fullName && (
              <span className="error">{formik.errors.fullName}</span>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && (
              <span className="error">{formik.errors.email}</span>
            )}
          </div>
          <div>
            <p style={{ marginBottom: "2px" }}>Amenities</p>
            {amenities.map((amenity) => {
              return (
                <label key={amenity.value}>
                  <input
                    type="checkbox"
                    name="amenities"
                    onChange={formik.handleChange}
                    value={amenity.value}
                  />
                  {amenity.displayText}
                </label>
              )
            })}
            {formik.touched.amenities && (
              <span className="error">{formik.errors.amenities}</span>
            )}
          </div>
          <div>
            <label htmlFor="checkInDate">Room type</label>
            <select name="roomType" {...formik.getFieldProps("roomType")}>
              <option value="single">Single</option>
              <option value="double">Double</option>
              <option value="suite">Suite</option>
            </select>
            {formik.touched.roomType && (
              <span className="error">{formik.errors.roomType}</span>
            )}
          </div>
          <div className="terms">
            <div>
              <input
                id="termsAccepted"
                name="termsAccepted"
                type="checkbox"
                {...formik.getFieldProps("termsAccepted")}
              />
              <label htmlFor="termsAccepted">Accept terms and conditions</label>
            </div>
            {formik.touched.termsAccepted && (
              <span className="error">{formik.errors.termsAccepted}</span>
            )}
          </div>
        </div>
        <button
          className="reserve-btn"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Loading..." : "Continue"}
        </button>
      </fieldset>
    </form>
  )
}
