import { Photo } from "./Photo";

export const PhotosList = ({ photos, addToFavorites, removeFromFavorites }) => {
  return (
    <ul className="photos-list">
      {photos.map((photo) => {
        return (
          <li key={photo.id}>
            <Photo
              photo={photo}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          </li>
        );
      })}
    </ul>
  );
};
