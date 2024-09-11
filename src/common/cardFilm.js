export function cardFilm(film) {
  console.log(film);
  const {
    posterUrl,
    premiereRu,
    nameRu,
    nameEn,
    genres,
    kinopoiskId,
    countries,
  } = film;
  return `<div class="card"><div class="wrapper-card">
        <div class="wrapper-img">
      <img src="${posterUrl}" alt="${nameRu} loading="lazy">
    </div>
    <h2 class="card-title">${nameRu}</h2>
    <div class="description">
      <div class="premiere">Премьера: ${premiereRu}</div>
      <div class="genres">Жанр: ${genres
        .map((item) => item.genre)
        .join(", ")}</div>
      <div class="countries">Страна: ${countries[0].country}</div>
    </div>
  	<a href="/movies/${kinopoiskId}">Подробнее...</a>
  </div></div>
  `;
}
