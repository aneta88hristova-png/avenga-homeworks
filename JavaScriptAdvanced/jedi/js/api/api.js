const SWAPI_BASE_URL = "https://swapi.dev/api";

export const StarWarsAPI = {

  getCharactersCount: function () {
    return fetch(`${SWAPI_BASE_URL}/people/`)
      .then((response) => response.json())
      .then((data) => data.count);
  },


  getCharactersPage: function (page) {
    return fetch(`${SWAPI_BASE_URL}/people/?page=${page}`)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch characters');
        return response.json();
      })
      .then((data) => data.results)
      .catch((error) => {
        console.error('Error fetching characters:', error);
        return [];
      });
  },


  getStarshipsPage: function (page = 1) {
    return fetch(`${SWAPI_BASE_URL}/starships/?page=${page}`)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch starships');
        return response.json();
      })
      .then((data) => data.results)
      .catch((error) => {
        console.error('Error fetching starships:', error);
        return [];
      });
  },


  getStarship: function (url) {
    return fetch(url)
      .then((response) => response.json())
      .catch(() => null);
  }
};