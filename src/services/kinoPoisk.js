const baseUrl = "https://kinopoiskapiunofficial.tech";
const apiKey = "f233f44b-6622-435a-b201-283ffe49af05";

export default class kinoPoisk {
  static async getMoviePremiere() {
    try {
      const responce = await fetch(
        `${baseUrl}/api/v2.2/films/premieres?year=2024&month=AUGUST`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": apiKey,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await responce.json();
      return data.items;
    } catch (error) {
      console.log(error);
    }
  }
  static async getFilmInfo(id) {
    try {
      const responce = await fetch(`${baseUrl}/api/v2.2/films/${id}`, {
        method: "GET",
        headers: {
          "X-API-KEY": apiKey,
          "Content-Type": "application/json",
        },
      });
      return await responce.json();
    } catch (error) {
      console.log(error);
    }
  }
  static async getFilmGenres(collection) {
    try {
      const responce = await fetch(
        `${baseUrl}/api/v2.2/films/collections?type=${collection}&page=1`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": apiKey,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await responce.json();
      return data.items;
    } catch (error) {
      console.log(error);
    }
  }
  static async getSerials() {
    try {
      const responce = await fetch(
        `${baseUrl}/api/v2.2/films/collections?type=POPULAR_SERIES&page=1`,
        {
          method: "GET",
          headers: {
            "X-API-KEY": apiKey,
            "Content-Type": "application/json",
          },
        }
      );
      const data = await responce.json();
      return data.items;
    } catch (error) {
      console.log(error);
    }
  }
  static async getNews() {
    try {
      const responce = await fetch(`${baseUrl}/api/v1/media_posts?page=1`, {
        method: "GET",
        headers: {
          "X-API-KEY": apiKey,
          "Content-Type": "application/json",
        },
      });
      const data = await responce.json();
      return data.items;
    } catch (error) {
      console.log(error);
    }
  }
}
