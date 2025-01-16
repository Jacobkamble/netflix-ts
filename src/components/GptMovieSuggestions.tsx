import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const movieNames: [] = []; // Using any[] for movieNames
  const movieResults: [] = []; // Using any[] for movieResults

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index] || []} // Safely default to an empty array
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
