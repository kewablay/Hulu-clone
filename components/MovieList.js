function MovieList({ results }) {
  return (
    <div>
      {results.map((result) => (
        <p>{result.title}</p>
      ))}
    </div>
  );
}

export default MovieList;
