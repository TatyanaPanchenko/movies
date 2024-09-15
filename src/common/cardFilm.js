export function cardFilm(film) {
  const { posterUrl, nameRu, genres, kinopoiskId } = film;
  return `<div class="card"><a href="/movies/${kinopoiskId}"><div class="wrapper-card">
        <div class="wrapper-img">
      <img src="${posterUrl}" alt="${nameRu} loading="lazy">
    </div>
    <h2 class="card-title">${nameRu}</h2>
    <div class="description">
            <div class="genres">${genres
              .map((item) => item.genre)
              .join(", ")}</div>
          </div>
  	  </div></a></div>
  `;
}
