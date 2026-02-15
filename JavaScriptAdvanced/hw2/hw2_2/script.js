const API_BASE_URL = "https://swapi.py4e.com/api/planets/";
let currentPage = 1;

const fetchPlanets = (apiUrl) => {
  document.getElementById("loading").style.display = "block";
  document.getElementById("error").style.display = "none";

  fetch(apiUrl)
    .then((response) =>
      !response.ok
        ? Promise.reject(new Error(`HTTP error! Status: ${response.status}`))
        : response.json(),
    )
    .then((data) => {
      document.getElementById("loading").style.display = "none";
      printPlanetsToTable(data.results, currentPage);
    })
    .catch((error) => {
      document.getElementById("loading").style.display = "none";
      showError(error.message);
    });
};

const printPlanetsToTable = (planets, page) => {
  const tableBody = document.getElementById("planetsTableBody");
  tableBody.innerHTML = "";

  const startIndex = (page - 1) * 10; 

  if (planets.length === 0) {
    tableBody.innerHTML =
      '<tr><td colspan="5" style="text-align: center; color: #ff8888;">No planets found</td></tr>';
  } else {
    planets.forEach((planet, index) => {
      const row = document.createElement("tr");
      const population = formatPopulation(planet.population);
      
      const planetNumber = startIndex + index + 1;

      row.innerHTML = `
                <td class="text-center">${planetNumber}</td>
                <td><strong>${planet.name}</strong></td>
                <td class="population">${population}</td>
                <td class="climate">${planet.climate}</td>
                <td class="gravity">${planet.gravity}</td>
            `;
      tableBody.appendChild(row);
    });
  }

  document.getElementById("planetsTable").style.display = "table";
  document.getElementById("pagination").style.display = "flex";
  toggleButtons(page);
};

const toggleButtons = (page) => {
  const nextButton = document.getElementById("nextButton");
  const prevButton = document.getElementById("prevButton");

  if (page === 1) {
    nextButton.style.display = "inline-flex";
    prevButton.style.display = "none";
  } else if (page === 2) {
    nextButton.style.display = "none";
    prevButton.style.display = "inline-flex";
  }
};

const formatPopulation = (population) => {
  if (!population || population === "unknown") return "Unknown";

  const popNum = Number(population);
  if (!isFinite(popNum) || popNum < 0) return population;

  return popNum >= 1000000000
    ? `${(popNum / 1000000000).toFixed(1)}B`
    : popNum >= 1000000
      ? `${(popNum / 1000000).toFixed(1)}M`
      : popNum >= 1000
        ? `${(popNum / 1000).toFixed(1)}K`
        : popNum.toLocaleString();
};

const showError = (message) => {
  const errorElement = document.getElementById("error");
  errorElement.querySelector(".error-message").textContent = `Error: ${message}`;
  errorElement.style.display = "flex";
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fetchButton").addEventListener("click", () => {
    const button = document.getElementById("fetchButton");
    button.disabled = true;
    currentPage = 1;
    fetchPlanets("https://swapi.py4e.com/api/planets/?page=1");

    setTimeout(() => {
      button.disabled = false;
    }, 2000);
  });

  document.getElementById("nextButton").addEventListener("click", () => {
    currentPage = 2;
    fetchPlanets("https://swapi.py4e.com/api/planets/?page=2");
  });

  document.getElementById("prevButton").addEventListener("click", () => {
    currentPage = 1;
    fetchPlanets("https://swapi.py4e.com/api/planets/?page=1");
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      document.getElementById("fetchButton").click();
    }
    if (event.key === "Escape") {
      document.getElementById("error").style.display = "none";
    }
  });
});