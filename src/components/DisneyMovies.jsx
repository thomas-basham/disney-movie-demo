import { disneyMovies } from "../disneyMovies";

export default function DisneyMovies() {
  function displayMovies() {
    return disneyMovies.map((movie, index) => {
      return (
        <div key={index}>
          <h2>{movie.title}</h2>
          <p>{movie.synopsis}</p>
          <p>
            <strong>length: </strong> {movie.runtimeMin} minutes
          </p>

          <img src={movie.poster} alt={movie.title} />
        </div>
      );
    });
  }

  return <>{displayMovies()}</>;
}
