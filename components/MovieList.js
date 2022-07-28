import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function MovieList({ results }) {
  return (
    <FlipMove
      className="px-5 py-5 sm:grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 3xl-flex justify-center flex-wrap
    "
    >
      {results.map((result) => (
        <Thumbnail key={result.id} result={result} />
      ))}
    </FlipMove>
  );
}

export default MovieList;
