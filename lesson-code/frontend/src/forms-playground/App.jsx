import "./App.css";

export const Playground = () => {
  return (
    <div>
      <div>
        <label htmlFor="tags">Tags</label>
        <input type="text" id="tags" />
      </div>
      <div>
        <p className="tag-container"></p>
      </div>
    </div>
  );
};
