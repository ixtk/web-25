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
        {/* ctrl + / */}
        <div className="name">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Enter spaceship name" />
        </div>
        <div className="shape">
          <label>Shape</label>
          <div>
            <label>
              <input type="radio" name="shape" />
              Saucer
            </label>
            <label>
              <input type="radio" name="shape" />
              Rocket
            </label>
            <label>
              <input type="radio" name="shape" />
              Sphere
            </label>
            <label>
              <input type="radio" name="shape" />
              Pyramid
            </label>
          </div>
        </div>
        <div className="background">
          <label htmlFor="">Background elements</label>
          <div>
            <label>
              <input type="checkbox" />
              Nebula cluds
            </label>
            <label>
              <input type="checkbox" />
              Asteroid fields
            </label>
            <label>
              <input type="checkbox" />
              Planets visible
            </label>
            <label>
              <input type="checkbox" />
              Stars
            </label>
          </div>
        </div>
      </form>
    </div>
  )
}
