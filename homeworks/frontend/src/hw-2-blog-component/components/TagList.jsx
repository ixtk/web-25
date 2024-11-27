const TagList = ({ tags }) => {
  return (
    <section className="box tags">
      <h2>Tags</h2>
      <ul>
        {tags.map((tag) => {
          return (
            <li key={tag}>
              <button>{tag}</button>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default TagList;
