export const Photo = ({ photo, addToFavorites, removeFromFavorites }) => {
  return (
    <>
      <img src={photo.src.small} alt={photo.alt} />
      {addToFavorites && (
        <button
          onClick={() => {
            addToFavorites(photo);
          }}
        >
          Add to favorites
        </button>
      )}

      {removeFromFavorites && (
        <button
          onClick={() => {
            removeFromFavorites(photo);
          }}
        >
          Remove from favorites
        </button>
      )}
    </>
  );
};
