const Posts = ({ posts }) => {
  return (
    <section className="box posts">
      <h2>Recent posts</h2>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post}>
              <a href="#">{post}</a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Posts;
