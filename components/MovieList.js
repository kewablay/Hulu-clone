import Thumbnail from "./Thumbnail";

function MovieList({ results }) {
  return (
    <div
      className="px-5 py-5 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl-flex justify-center flex-wrap
    "
    >
      {results.map((result) => (
        <div>
          <Thumbnail key={result.id} result={result} />
        </div>
      ))}
    </div>
  );
}

export default MovieList;
