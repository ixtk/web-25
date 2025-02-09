import { useState } from "react";
import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { object, string, array } from "yup";

export const Spaceship = () => {
  const shapes = ["saucer", "rocket", "sphere", "pyramid"];
  const materials = ["crystal", "plastic", "glass", "paper"];
  const colors = ["red", "blue", "purple", "orange", "cornflowerblue"];
  const styles = ["illustration", "cartoonish", "pixelArt", "scifi"];
  const backgroundElements = ["nebula", "asteroids", "planets", "stars"];

  const [resultUrl, setResultUrl] = useState("");

  const formSchema = object({
    spaceshipName: string().min(4).required(),
    shape: string().min(4).required(),
    color: string().min(4).required(),
    style: string().min(4).required(),
    material: string().min(4).required(),
    backgroundElements: array().of(string().min(3)),
  });

  // classNames for container divs:
  // name, color, shape, material, style, background

  return (
    <div>
      <h1>My Little Spaceship</h1>

      <Formik
        initialValues={{
          spaceshipName: "",
          shape: "",
          color: "",
          style: "",
          material: "",
          backgroundElements: [],
        }}
        validationSchema={formSchema}
        onSubmit={async () => {
          console.log("Submitting form!");
          console.log(data);

          const response = await fetch("https://api.abcd.ge/spaceship", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(data),
          });
          console.log(response);

          const json = await response.json();
          console.log(json);
          setResultUrl(json.url);
          formikHelpers.setSubmitting(false);
        }}
      >
        {(spaceshipForm) => {
          return (
            <Form>
              <div className="name">
                <label htmlFor="name">Name</label>
                <Field type="text" name="spaceshipName" />
                <ErrorMessage name="spaceshipName" component="span" />
              </div>
              <button disabled={spaceshipForm.isSubmitting} type="submit">
                {spaceshipForm.isSubmitting ? "Loading..." : "Create!"}
              </button>
              {spaceshipForm.isSubmitting ? (
                "Loading..."
              ) : (
                <img src={resultUrl} alt="" />
              )}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};
