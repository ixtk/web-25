import { useState } from "react"
import "./App.css"
import { Formik, Form } from "formik"
import { object, string, array } from "yup"
import { StyleInput } from "./components/StyleInput"
import { ShapeInput } from "./components/ShapeInput"
import { BackgroundInput } from "./components/BackgroundInput"
import { NameInput } from "./components/NameInput"
import { ColorInput } from "./components/ColorInput"
import { MaterialInput } from "./components/MaterialInput"

export const Spaceship = () => {
  const [resultUrl, setResultUrl] = useState("")

  const formSchema = object({
    spaceshipName: string().min(4).required(),
    shape: string().min(4).required(),
    color: string().min(4).required(),
    style: string().min(4).required(),
    material: string().min(4).required(),
    backgroundElements: array().of(string().min(3))
  })

  const formInitialValues = {
    spaceshipName: "",
    shape: "",
    color: "",
    style: "",
    material: "",
    backgroundElements: []
  }

  const generateImage = async (data) => {
    console.log("Submitting form!", data)

    const response = await fetch("https://api.abcd.ge/spaceship", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })

    const json = await response.json()

    setResultUrl(json.url)
  }

  return (
    <div>
      <h1>My Little Spaceship</h1>
      <Formik
        initialValues={formInitialValues}
        validationSchema={formSchema}
        onSubmit={generateImage}
      >
        {(formikProps) => (
          <Form>
            <NameInput />
            <ShapeInput />
            <BackgroundInput />
            <ColorInput setFieldValue={formikProps.setFieldValue} />
            <MaterialInput />
            <StyleInput />

            <button disabled={formikProps.isSubmitting} type="submit">
              {formikProps.isSubmitting ? "Loading..." : "Create!"}
            </button>

            {formikProps.isSubmitting ? (
              "Loading..."
            ) : (
              <img src={resultUrl} alt="" />
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}
