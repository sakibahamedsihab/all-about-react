function MovieCard({ data }) {
  return (
    <div className="flex flex-col items-center p-3 bg-[#272727] rounded-md">
      <img className="mb-5" src={data.Poster} />
      <div className="flex flex-col gap-3">
        <h3 className="font-semibold text-2xl">{data.Title}</h3>
        <p className="flex-1">{data.Year}</p>
        <button className="place-self-center px-3 py-1 border rounded-md bg-white text-gray-500 font-extrabold">
          Add to watchlist
        </button>
      </div>
    </div>
  );
}

export default MovieCard;
