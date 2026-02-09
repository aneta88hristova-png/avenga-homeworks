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
                <td>${index + 1}</td>
                <td><strong>${planet.name}</strong></td>
                <td class="population">${population}</td>
                <td class="climate">${planet.climate}</td>
                <td class="gravity">${planet.gravity}</td>
            `;

      tableBody.appendChild(row);
    });
  }

  document.getElementById("planetsTable").style.display = "table";
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
    button.textContent = "Loading...";

    const apiUrl = API_BASE_URL;
    fetchPlanets(apiUrl);

    setTimeout(() => {
      button.disabled = false;
      button.textContent = "Get First 10 Planets";
    }, 2000);
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