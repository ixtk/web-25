const SearchBar = () => {
  return (
    <div className="box search-bar">
      <div className="search-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input placeholder="Search articles, topics, etc." type="search" />
      </div>
      <button>Search</button>
    </div>
  );
};

export default SearchBar;
