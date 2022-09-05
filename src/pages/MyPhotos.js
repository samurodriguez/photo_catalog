import { PhotosList } from "../components/PhotosList";

export const MyPhotos = ({ favorites, removeFromFavorites }) => {
  return (
    <section>
      <h2>My photos</h2>

      {favorites.length ? (
        <PhotosList
          photos={favorites}
          removeFromFavorites={removeFromFavorites}
        />
      ) : (
        <p>No photos in favorites</p>
      )}
    </section>
  );
};
