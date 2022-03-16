import Hero from "./Hero";

// API key 538c0bcfa5b7c4e7d4ff31b31e5e7877
// example search link https://api.themoviedb.org/3/search/movie?api_key=538c0bcfa5b7c4e7d4ff31b31e5e7877&language=en-US&query=Star%20Wars&page=1&include_adult=false

const SearchView = ({ keyword, searchResults }) => {
  const title = `You are searching for ${keyword}`;
  console.log(searchResults, "are the search results");

  return (
    <>
      <Hero text={title} />
    </>
  );
};

export default SearchView;
