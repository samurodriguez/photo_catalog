import { useState } from "react";
import { SearchPhotosForm } from "../components/SearchPhotosForm";
import { PhotosList } from "../components/PhotosList";

export const SearchPhotos = ({ addToFavorites }) => {
  const [searchResults, setSearchResults] = useState([]);

  return (
    <section id="search-photos">
      <h2>Search Photos</h2>

      <SearchPhotosForm setSearchResults={setSearchResults} />
      {searchResults.length ? (
        <PhotosList photos={searchResults} addToFavorites={addToFavorites} />
      ) : (
        <p>No results</p>
      )}
    </section>
  );
};
