export function cardNews(news) {
  const { title, description, imageUrl, url } = news;
  return `
        <div class="new">
          <div class="new-title">${title}</div>
          <div class="new-description">${description}</div>
          <div class="new-img"><img src="${imageUrl}" alt="${title}"></div>
          <div class="new-link"><a href="${url}" target="_blank">Читать подробнее</a></div>
        </div>
       `;
}
