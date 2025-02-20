import { useState } from "react";
import "./App.css";
import { useFormik } from "formik";
import { string, object, array } from "yup";

export const Spaceship = () => {
  const shapes = ["saucer", "rocket", "sphere", "pyramid"];
  const materials = ["crystal", "plastic", "glass", "paper"];
  const colors = ["red", "blue", "purple", "orange"];
  const styles = ["illustration", "cartoonish", "pixelArt", "scifi"];
  const backgroundElements = ["nebula", "asteroids", "planets", "stars"];

  const [resultUrl, setResultUrl] = useState("");

  const form = useFormik({
    initialValues: {
      spaceshipName: "",
      color: "",
      material: "",
      // optional, array of string of min 3 characters
      backgroundElements: [],
      shape: "",
      style: "",
    },
    validationSchema: object({
      spaceshipName: string()
        .min(3, "მინიმუმ 3 სიმბოლო")
        .required("აუცილებელი ველი"),
      color: string().min(3).required(),
      material: string().min(4).max(20).required(),
      shape: string().min(3).required(),
      style: string().min(4).max(20).required(),
      backgroundElements: array().of(string().min(3)).optional(),
    }),
    onSubmit: async (data) => {
      console.log("Submitting values!");
      console.log(data);

      const response = await fetch("https://api.abcd.ge/spaceship", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const json = await response.json();

      setResultUrl(json.url);
    },
  });

  // form.values
  // form.errors
  // form.isSubmitting

  // form.touched

  console.log(form.touched);

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
            onBlur={form.handleBlur}
          />
          <span style={{ color: "red" }}>{form.errors.spaceshipName}</span>
        </div>
        <div className="shape">
          <label>Shape</label>
          <div>
            {shapes.map((shapeText) => {
              return (
                <label key={shapeText}>
                  <input
                    type="radio"
                    name="shape"
                    value={shapeText}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  {shapeText}
                </label>
              );
            })}
            <span style={{ color: "red" }}>{form.errors.shape}</span>
            {/* 
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
            </label> */}
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
                onBlur={form.handleBlur}
              />
              Nebula cluds
            </label>
            <label>
              <input
                type="checkbox"
                value="asteroidFields"
                name="backgroundElements"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              Asteroid fields
            </label>
            <label>
              <input
                type="checkbox"
                value="planetsVisible"
                name="backgroundElements"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              Planets visible
            </label>
            <label>
              <input
                type="checkbox"
                value="stars"
                name="backgroundElements"
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              Stars
            </label>
          </div>
          <span style={{ color: "red" }}>{form.errors.backgroundElements}</span>
        </div>
        <div className="color">
          <label>Color</label>
          {colors.map((col) => {
            return (
              <button
                className="color"
                onClick={() => form.setFieldValue("color", col)}
                type="button"
                name="color"
                onBlur={form.handleBlur}
                style={{ backgroundColor: col }}
                key={col}
              ></button>
            );
          })}
          <span style={{ color: "red" }}>{form.errors.color}</span>
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
                  onBlur={form.handleBlur}
                />
                {material}
              </label>
            );
          })}
          <span style={{ color: "red" }}>{form.errors.material}</span>
        </div>
        <div className="style">
          <label htmlFor="">Art style</label>
          <select
            defaultValue=""
            name="style"
            onBlur={form.handleBlur}
            onChange={form.handleChange}
          >
            <option value="">---</option>
            <option value="illustration">Illustration</option>
            <option value="cartoonish">Cartoonish</option>
            <option value="scifi">Sci-Fi</option>
            <option value="pixelArt">Pixel art</option>
          </select>
          <span style={{ color: "red" }}>{form.errors.style}</span>
        </div>
        {/* form.isSubmitting, disabled */}
        <button disabled={form.isSubmitting} type="submit">
          {form.isSubmitting ? "Loading..." : "Create!"}
        </button>
        {form.isSubmitting
          ? "Loading..."
          : resultUrl && <img src={resultUrl} alt="" />}
      </form>
    </div>
  );
};
