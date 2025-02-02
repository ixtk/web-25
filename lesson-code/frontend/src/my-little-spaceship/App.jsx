import "./App.css"
import { useFormik } from "formik"

export const Spaceship = () => {
  const shapes = ["saucer", "rocket", "sphere", "pyramid"]
  const materials = ["crystal", "plastic", "glass", "paper"]
  const colors = ["red", "blue", "purple", "orange"]
  const styles = ["illustration", "cartoonish", "pixelArt", "scifi"]
  const backgroundElements = ["nebula", "asteroids", "planets", "stars"]

  const form = useFormik({
    initialValues: {
      spaceshipName: "",
      color: "",
      material: "",
      backgroundElements: [],
      shape: "",
      style: ""
    },
    onSubmit: (data) => {
      console.log("Submitting values!")
      console.log(data)
    }
  })

  // console.log(form.values)

  return (
    <div>
      <h1>My Little Spaceship</h1>
      <form onSubmit={form.handleSubmit}>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="spaceshipName"
            placeholder="Enter spaceship name"
            onChange={form.handleChange}
          />
        </div>
        <div className="shape">
          <label>Shape</label>
          <div>
            <label>
              <input
                type="radio"
                name="shape"
                value="saucer"
                onChange={form.handleChange}
              />
              Saucer
            </label>
            <label>
              <input
                type="radio"
                name="shape"
                value="rocket"
                onChange={form.handleChange}
              />
              Rocket
            </label>
            <label>
              <input
                type="radio"
                name="shape"
                value="sphere"
                onChange={form.handleChange}
              />
              Sphere
            </label>
            <label>
              <input
                type="radio"
                name="shape"
                value="pyramid"
                onChange={form.handleChange}
              />
              Pyramid
            </label>
          </div>
        </div>
        <div className="background">
          <label htmlFor="">Background elements</label>
          <div>
            <label>
              <input
                type="checkbox"
                value="nebulaClouds"
                name="backgroundElements"
                onChange={form.handleChange}
              />
              Nebula cluds
            </label>
            <label>
              <input
                type="checkbox"
                value="asteroidFields"
                name="backgroundElements"
                onChange={form.handleChange}
              />
              Asteroid fields
            </label>
            <label>
              <input
                type="checkbox"
                value="planetsVisible"
                name="backgroundElements"
                onChange={form.handleChange}
              />
              Planets visible
            </label>
            <label>
              <input
                type="checkbox"
                value="stars"
                name="backgroundElements"
                onChange={form.handleChange}
              />
              Stars
            </label>
          </div>
        </div>
        <div className="color">
          <label>Color</label>
          {colors.map((col) => {
            return (
              <button
                className="color"
                onClick={() => form.setFieldValue("color", col)}
                type="button"
                style={{ backgroundColor: col }}
                key={col}
              ></button>
            )
          })}
        </div>
        <div className="material">
          <label htmlFor="">Material</label>
          {materials.map((material) => {
            return (
              <label key={material}>
                <input
                  type="radio"
                  name="material"
                  value={material}
                  onChange={form.handleChange}
                />
                {material}
              </label>
            )
          })}
        </div>
        <div className="style">
          <label htmlFor="">Art style</label>
          <select defaultValue="" name="style" onChange={form.handleChange}>
            <option value="">---</option>
            <option value="illustration">Illustration</option>
            <option value="cartoonish">Cartoonish</option>
            <option value="scifi">Sci-Fi</option>
            <option value="pixelArt">Pixel art</option>
          </select>
        </div>
        <button type="submit">Create!</button>
      </form>
    </div>
  )
}
