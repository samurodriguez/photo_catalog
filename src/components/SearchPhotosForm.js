import { useState } from "react";

export const SearchPhotosForm = ({ setSearchResults }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const query = event.target.elements.search.value;

      const searchParams = new URLSearchParams();

      searchParams.append("query", query);
      searchParams.append("locale", "es-ES");
      searchParams.append("per_page", 80);

      const res = await fetch(
        `https://api.pexels.com/v1/search?${searchParams.toString()}`,
        {
          headers: {
            Authorization: process.env.REACT_APP_API_KEY,
          },
        }
      );

      if (!res.ok) {
        setErrorMessage("Could not get data from API");
      }

      const body = await res.json();

      setSearchResults(body.photos);
    } catch (error) {
      console.error(error.message);
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Write your query:</label>
        <input id="search" name="search" type="search" />

        <button type="submit">Search</button>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
    </>
  );
};
