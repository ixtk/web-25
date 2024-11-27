import "./App.css";
import Posts from "./components/Posts";
import SearchBar from "./components/SearchBar";
import TagList from "./components/TagList";
import data from "./data.json";

export const BlogComponent = () => {
  return (
    <div className="container">
      <SearchBar />
      <TagList tags={data.tags} />
      <Posts posts={data.posts} />
    </div>
  );
};
