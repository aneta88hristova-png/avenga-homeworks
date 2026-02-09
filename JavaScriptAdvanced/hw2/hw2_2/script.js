const API_BASE_URL = "https://swapi.py4e.com/api/planets/";

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
      printPlanetsToTable(data.results);

      const isPage1 = apiUrl.includes("page=1") || !apiUrl.includes("page=");
      const isPage2 = apiUrl.includes("page=2");

      if (isPage1) {
        document.getElementById("nextButton").style.display = "block";
        document.getElementById("prevButton").style.display = "none";
      } else if (isPage2) {
        document.getElementById("nextButton").style.display = "none";
        document.getElementById("prevButton").style.display = "block";
      }
    })
    .catch((error) => {
      document.getElementById("loading").style.display = "none";
      showError(error.message);
    });
};

const printPlanetsToTable = (planets) => {
  const tableBody = document.getElementById("planetsTableBody");
  tableBody.innerHTML = "";

  const planetsToShow = planets.slice(0, 10);

  if (planetsToShow.length === 0) {
    tableBody.innerHTML =
      '<tr><td colspan="5" style="text-align: center; color: #ff8888;">No planets found</td></tr>';
  } else {
    planetsToShow.forEach((planet, index) => {
      const row = document.createElement("tr");

      const population = formatPopulation(planet.population);

      row.innerHTML = `
                <td class="text-center">${index + 1}</td>
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
  errorElement.querySelector(".error-message").textContent =
    `Error: ${message}`;
  errorElement.style.display = "flex";
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fetchButton").addEventListener("click", () => {
    const button = document.getElementById("fetchButton");
    button.disabled = true;

    fetchPlanets("https://swapi.py4e.com/api/planets/?page=1");

    setTimeout(() => {
      button.disabled = false;
    }, 2000);
  });

  document.getElementById("nextButton").addEventListener("click", () => {
    fetchPlanets("https://swapi.py4e.com/api/planets/?page=2");
  });

  document.getElementById("prevButton").addEventListener("click", () => {
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

console.log("Star Wars Planets Viewer loaded!");
