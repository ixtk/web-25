import { useState } from "react"
import "./App.css"
import { useFormik } from "formik"

export const Spaceship = () => {
  const shapes = ["saucer", "rocket", "sphere", "pyramid"]
  const materials = ["crystal", "plastic", "glass", "paper"]
  const colors = ["red", "blue", "purple", "orange"]
  const styles = ["illustration", "cartoonish", "pixelArt", "scifi"]
  const backgroundElements = ["nebula", "asteroids", "planets", "stars"]

  const [resultUrl, setResultUrl] = useState("")

  const spaceshipForm = useFormik({
    initialValues: {
      spaceshipName: "",
      shape: "",
      color: "",
      style: "",
      material: "",
      backgroundElements: []
    },
    onSubmit: async (data, formikHelpers) => {
      console.log("Submitting form!")
      console.log(data)

      const response = await fetch("https://api.abcd.ge/spaceship", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      })
      console.log(response)

      const json = await response.json()
      console.log(json)
      setResultUrl(json.url)
      formikHelpers.setSubmitting(false)
    }
  })

  // console.log(spaceshipForm)

  // classNames for container divs:
  // name, color, shape, material, style, background

  return (
    <div>
      <h1>My Little Spaceship</h1>
      <form onSubmit={spaceshipForm.handleSubmit}>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="spaceshipName"
            onChange={spaceshipForm.handleChange}
          />
        </div>
        <div className="shape">
          <label>Shape</label>
          <div>
            {shapes.map((shape) => {
              return (
                <label key={shape}>
                  <input
                    type="radio"
                    value={shape}
                    onChange={spaceshipForm.handleChange}
                    name="shape"
                  />
                  {shape}
                </label>
              )
            })}
          </div>
        </div>
        <div className="background">
          <label>Background elements</label>
          <div>
            {backgroundElements.map((background) => {
              return (
                <label key={background}>
                  <input
                    type="checkbox"
                    value={background}
                    name="backgroundElements"
                    onChange={spaceshipForm.handleChange}
                  />
                  {background}
                </label>
              )
            })}
          </div>
        </div>
        <div className="color">
          <label htmlFor="">Color</label>
          <div>
            {colors.map((col) => {
              return (
                <button
                  onClick={() => spaceshipForm.setFieldValue("color", col)}
                  type="button"
                  style={{ backgroundColor: col }}
                  key={col}
                  className="color"
                ></button>
              )
            })}
          </div>
        </div>
        <div className="material">
          <label>Material</label>
          <div>
            {materials.map((material) => {
              return (
                <label key={material}>
                  <input
                    type="radio"
                    name="material"
                    value={material}
                    onChange={spaceshipForm.handleChange}
                  />
                  {material}
                </label>
              )
            })}
          </div>
        </div>
        <div className="style">
          <label>Style</label>
          <select name="style" onChange={spaceshipForm.handleChange}>
            <option value="">---</option>
            <option value="illustration">Illustration</option>
            <option value="cartoonish">Cartoonish</option>
            <option value="pixelArt">Pixel Art</option>
            <option value="scifi">Sci-fi</option>
          </select>
        </div>
        <button type="submit">Create!</button>
        {spaceshipForm.isSubmitting ? (
          "Loading..."
        ) : (
          <img src={resultUrl} alt="" />
        )}
      </form>
    </div>
  )
}
