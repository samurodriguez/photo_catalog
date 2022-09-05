import "./App.css";
import { useState, useEffect } from "react";
import { SearchPhotos } from "./pages/SearchPhotos";
import { MyPhotos } from "./pages/MyPhotos";

function App() {
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

  const [favorites, setFavorites] = useState(storedFavorites);
  const [showingPage, setShowingPage] = useState("search-photos");

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToFavorites = (photoToAdd) => {
    const photoExists = favorites.find((photo) => photo.id === photoToAdd.id);

    if (!photoExists) {
      setFavorites([...favorites, photoToAdd]);
    }
  };

  const removeFromFavorites = (photoToRemove) => {
    const favoritesFiltered = favorites.filter(
      (photo) => photo.id !== photoToRemove.id
    );

    setFavorites(favoritesFiltered);
  };

  return (
    <>
      <header>
        <h1>Photo catalog</h1>
        <nav>
          <ul>
            <li>
              <button
                onClick={() => {
                  setShowingPage("my-photos");
                }}
                className={showingPage === "my-photos" ? "active" : null}
              >
                My photos
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  setShowingPage("search-photos");
                }}
                className={showingPage === "search-photos" ? "active" : null}
              >
                Search new photos
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        {showingPage === "search-photos" && (
          <SearchPhotos addToFavorites={addToFavorites} />
        )}

        {showingPage === "my-photos" && (
          <MyPhotos
            favorites={favorites}
            removeFromFavorites={removeFromFavorites}
          />
        )}
      </main>
      <footer>
        <p>Hack a Boss 2022@</p>
      </footer>
    </>
  );
}

export default App;
