import "./App.css"

export const Spaceship = () => {
  const shapes = ["saucer", "rocket", "sphere", "pyramid"]
  const materials = ["crystal", "plastic", "glass", "paper"]
  const colors = ["red", "blue", "purple", "orange"]
  const styles = ["illustration", "cartoonish", "pixelArt", "scifi"]
  const backgroundElements = ["nebula", "asteroids", "planets", "stars"]

  // classNames for container divs:
  // name, color, shape, material, style, background

  return (
    <div>
      <h1>My Little Spaceship</h1>
      <form>
        <div className="name">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" />
        </div>
        <div className="shape">
          <label>Shape</label>
          <div>
            {shapes.map((shape) => {
              return (
                <label key={shape}>
                  <input type="radio" name="shape" />
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
                  <input type="checkbox" name={background} />
                  {background}
                </label>
              )
            })}
          </div>
        </div>
        <div className="color">
          <label htmlFor="">Color</label>
          <div>
            {colors.map((color) => {
              return (
                <button
                  style={{ backgroundColor: color }}
                  key={color}
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
                  <input type="radio" name="material" />
                  {material}
                </label>
              )
            })}
          </div>
        </div>
        <div className="style">
          <label>Style</label>
          <select name="style">
            <option value="">---</option>
            <option value="illustration">Illustration</option>
            <option value="cartoonish">Cartoonish</option>
            <option value="pixelArt">Pixel Art</option>
            <option value="scifi">Sci-fi</option>
          </select>
        </div>
        <button type="submit">Create!</button>
      </form>
    </div>
  )
}
