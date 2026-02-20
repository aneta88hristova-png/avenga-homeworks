const SWAPI_BASE_URL = "https://swapi.dev/api";

export const StarWarsAPI = {
  getCharactersCount: async function () {
    try {
      const response = await fetch(`${SWAPI_BASE_URL}/people/`);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch characters count`,
        );
      }

      const data = await response.json();
      return data.count;
    } catch (error) {
      console.error("Error fetching characters count:", error);
      return 0;
    }
  },

  getCharactersPage: async function (page) {
    try {
      const response = await fetch(`${SWAPI_BASE_URL}/people/?page=${page}`);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch characters`,
        );
      }

      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching characters:", error);
      return [];
    }
  },

  getStarshipsPage: async function (page) {
    try {
      const response = await fetch(`${SWAPI_BASE_URL}/starships/?page=${page}`);

      if (!response.ok) {
        throw new Error(
          ` Failed to fetch starships`,
        );
      }

      const data = await response.json();
      return data.results;
    } catch (error) {
      console.error("Error fetching starships:", error);
      return [];
    }
  },

  getStarship: async function (url) {
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch starship from ${url}`,
        );
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching starship:", error);
      return null;
    }
  },
};
