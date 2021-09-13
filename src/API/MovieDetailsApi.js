function makeMovieDetail(movieDetail) {
  return {
    title : movieDetail.title,
    id : movieDetail.id,
    imdbID : movieDetail.imdb_id,
    image : movieDetail.poster_path,
    overview : movieDetail.overview,
    tagline : movieDetail.tagline,
    vote_average : movieDetail.vote_average,
    date : movieDetail.release_date,
    runtime : movieDetail.runtime,
    language : movieDetail.original_language,
    genres : movieDetail.genres,
  };
}

async function movieDetailsApi(movieID) {
  const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=393b7ef10061d30182b6ed6d24273ca9`;
  let movieDetail = {};

  movieDetail = await fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return makeMovieDetail(data)
    });

  return movieDetail;
}

export { movieDetailsApi }
