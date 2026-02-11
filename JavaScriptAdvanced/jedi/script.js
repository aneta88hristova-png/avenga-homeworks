import { StarWarsAPI } from "./js/api/api.js";

import {
  renderTable,
  renderStarshipsTable,
} from "./js/components/tableComponents.js";

import {
  setCurrentPage,
  getCurrentPage,
  setTotalCharacters,
  getTotalCharacters,
} from "./js/state/charactersState.js";

import {
  setStarshipsCurrentPage,
  getStarshipsCurrentPage,
  setTotalStarships,
  getTotalStarships,
} from "./js/state/starshipState.js";

import { createStars } from "./js/utils/stars.js";

window.StarWarsAPI = StarWarsAPI;
window.charactersState = {
  setCurrentPage: (page) => {
    charactersState.currentPage = page;
    setCurrentPage(page);
  },
  getCurrentPage: () => getCurrentPage(),
  setTotalCharacters: (count) => {
    charactersState.totalCharacters = count;
    setTotalCharacters(count);
  },
  getTotalCharacters: () => getTotalCharacters(),
};

window.starshipsState = {
  setStarshipsCurrentPage: (page) => {
    setStarshipsCurrentPage(page);
  },
  getStarshipsCurrentPage: () => getStarshipsCurrentPage(),
  setTotalStarships: (count) => {
    setTotalStarships(count);
  },
  getTotalStarships: () => getTotalStarships(),
};

function showHero() {
  document.getElementById("hero-section").style.display = "flex";
  document.getElementById("characters-section").classList.remove("active");
  document.getElementById("starships-section").classList.remove("active");
}

function showCharacters() {
  document.getElementById("hero-section").style.display = "none";
  document.getElementById("characters-section").classList.add("active");
  document.getElementById("starships-section").classList.remove("active");
  loadCharactersData();
}

function showStarships() {
  document.getElementById("hero-section").style.display = "none";
  document.getElementById("starships-section").classList.add("active");
  document.getElementById("characters-section").classList.remove("active");
  loadStarshipsData();
}

function loadCharactersData() {
  const loadingElement = document.getElementById("characters-loading");
  const tablePlaceholder = document.getElementById(
    "characters-table-placeholder",
  );

  if (loadingElement) loadingElement.style.display = "block";
  if (tablePlaceholder) tablePlaceholder.innerHTML = "";

  fetch("https://swapi.dev/api/people/")
    .then((response) => response.json())
    .then((data) => {
      window.charactersState.setTotalCharacters(data.count);
      window.charactersState.setCurrentPage(1);
      return StarWarsAPI.getCharactersPage(1);
    })
    .then((characters) => {
      renderTable(characters);
      if (loadingElement) loadingElement.style.display = "none";
    })
    .catch((error) => {
      console.error("Error loading characters:", error);
      if (loadingElement) loadingElement.style.display = "none";
      if (tablePlaceholder) {
        tablePlaceholder.innerHTML =
          '<p style="color: var(--sw-gold); text-align: center;">Error loading data</p>';
      }
    });
}

function loadStarshipsData() {
  const loadingElement = document.getElementById("starships-loading");
  const tablePlaceholder = document.getElementById(
    "starships-table-placeholder",
  );

  if (loadingElement) loadingElement.style.display = "block";
  if (tablePlaceholder) tablePlaceholder.innerHTML = "";

  fetch("https://swapi.dev/api/starships/")
    .then((response) => response.json())
    .then((data) => {
      if (window.starshipsState) {
        window.starshipsState.setTotalStarships(data.count);
        window.starshipsState.setStarshipsCurrentPage(1);
      }
      return StarWarsAPI.getStarshipsPage(1);
    })
    .then((starships) => {
      renderStarshipsTable(starships);
      if (loadingElement) loadingElement.style.display = "none";
    })
    .catch((error) => {
      console.error("Error loading starships:", error);
      if (loadingElement) loadingElement.style.display = "none";
      if (tablePlaceholder) {
        tablePlaceholder.innerHTML =
          '<p style="color: var(--sw-gold); text-align: center;">Error loading starships</p>';
      }
    });
}

document.addEventListener("DOMContentLoaded", () => {
  createStars("hero-stars-container", 200);
  createStars("selection-stars-container", 120);

  document
    .getElementById("characters-box")
    .addEventListener("click", showCharacters);
  document
    .getElementById("starships-box")
    .addEventListener("click", showStarships);

  document
    .getElementById("back-from-characters")
    .addEventListener("click", showHero);
  document
    .getElementById("back-from-starships")
    .addEventListener("click", showHero);
});
