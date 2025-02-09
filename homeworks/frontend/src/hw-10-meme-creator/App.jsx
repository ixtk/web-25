import "./App.css";
import { useFormik } from "formik";

const images = [
  "https://i.imgflip.com/1o00in.jpg",
  "https://i.imgflip.com/2eeunw.jpg",
  "https://i.imgflip.com/1yxkcp.jpg",
  "https://i.imgflip.com/3eqjd8.jpg",
  "https://i.imgflip.com/434i5j.png",
  "https://i.imgflip.com/1bij.jpg",
];

export const MemeGenerator = () => {
  const form = useFormik({
    initialValues: {
      topText: "",
      bottomText: "",
      imageUrl: images[Math.floor(Math.random() * images.length)],
      textColor: "#ffffff",
    },
  });

  return (
    <div className="container">
      <div className="input-container">
        <div>
          <label htmlFor="">
            Top Text
            <input type="text" name="topText" onChange={form.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Bottom Text
            <input type="text" name="bottomText" onChange={form.handleChange} />
          </label>
        </div>
        <div>
          <label htmlFor="">
            Image URL
            <input
              type="text"
              value={form.values.imageUrl}
              name="imageUrl"
              onChange={form.handleChange}
            />
          </label>
        </div>
        <div className="color">
          <label htmlFor="">
            Text Color
            <input type="color" value={form.values.textColor} name="textColor" onChange={form.handleChange} />
          </label>
        </div>
      </div>
      <div className="result-container">
        <div className="meme">
          <p className="top-text" style={{ color: form.values.textColor }}>
            {form.values.topText}
          </p>
          <img src={form.values.imageUrl} alt="" />
          <p className="bottom-text" style={{ color: form.values.textColor }}>
            {form.values.bottomText}
          </p>
        </div>
        <button
          onClick={() =>
            form.setFieldValue(
              "imageUrl",
              images[Math.floor(Math.random() * images.length)]
            )
          }
        >
          Get a new image
        </button>
      </div>
    </div>
  );
};
