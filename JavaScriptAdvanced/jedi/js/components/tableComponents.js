function createTable(characters) {
  const container = document.createElement("div");
  container.className = "table-container";

  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = [
    "Name",
    "Height",
    "Mass",
    "Hair Color",
    "Skin Color",
    "Eye Color",
    "Birth Year",
    "Gender",
    "Starships",
  ];

  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  characters.forEach((character) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = character.name || "N/A";
    row.appendChild(nameCell);

    const heightCell = document.createElement("td");
    heightCell.textContent = character.height || "N/A";
    row.appendChild(heightCell);

    const massCell = document.createElement("td");
    massCell.textContent = character.mass || "N/A";
    row.appendChild(massCell);

    const hairCell = document.createElement("td");
    hairCell.textContent = character.hair_color || "N/A";
    row.appendChild(hairCell);

    const skinCell = document.createElement("td");
    skinCell.textContent = character.skin_color || "N/A";
    row.appendChild(skinCell);

    const eyeCell = document.createElement("td");
    eyeCell.textContent = character.eye_color || "N/A";
    row.appendChild(eyeCell);

    const birthCell = document.createElement("td");
    birthCell.textContent = character.birth_year || "N/A";
    row.appendChild(birthCell);

    const genderCell = document.createElement("td");
    genderCell.textContent = character.gender || "N/A";
    row.appendChild(genderCell);

    const starshipsCell = document.createElement("td");
    const starshipBtn = document.createElement("button");
    starshipBtn.className = "starships-btn";
    starshipBtn.setAttribute("onclick", `showStarships('${character.url}')`);
    starshipBtn.textContent = `🚀 ${character.starships?.length || 0}`;
    starshipsCell.appendChild(starshipBtn);
    row.appendChild(starshipsCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  container.appendChild(table);

  return container;
}

function createStarshipsTable(starships) {
  const container = document.createElement("div");
  container.className = "table-container starships-table";

  if (!starships?.length) {
    const message = document.createElement("p");
    message.style.padding = "20px";
    message.style.color = "#00d4ff";
    message.textContent = "No starships found 🚀";
    container.appendChild(message);
    return container;
  }

  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const headers = ["Name", "Model", "Class", "Manufacturer", "Crew"];

  headers.forEach((headerText) => {
    const th = document.createElement("th");
    th.textContent = headerText;
    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");

  starships.forEach((ship) => {
    const row = document.createElement("tr");

    const nameCell = document.createElement("td");
    nameCell.textContent = ship.name || "N/A";
    row.appendChild(nameCell);

    const modelCell = document.createElement("td");
    modelCell.textContent = ship.model || "N/A";
    row.appendChild(modelCell);

    const classCell = document.createElement("td");
    classCell.textContent = ship.starship_class || "N/A";
    row.appendChild(classCell);

    const manufacturerCell = document.createElement("td");
    manufacturerCell.textContent = ship.manufacturer || "N/A";
    row.appendChild(manufacturerCell);

    const crewCell = document.createElement("td");
    crewCell.textContent = ship.crew || "N/A";
    row.appendChild(crewCell);

    tbody.appendChild(row);
  });

  table.appendChild(tbody);
  container.appendChild(table);

  return container;
}

function createPagination(currentPage, totalCharacters) {
  const maxCharacters = Math.min(totalCharacters, 20);
  const totalPages = Math.ceil(maxCharacters / 10);

  const container = document.createElement("div");
  container.className = "pagination";

  const prevBtn = document.createElement("button");
  prevBtn.className = "pagination-btn";
  prevBtn.id = "prev-btn";
  prevBtn.textContent = "Previous";
  if (currentPage === 1) {
    prevBtn.disabled = true;
  }

  const pageInfo = document.createElement("span");
  pageInfo.className = "page-info";
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

  const nextBtn = document.createElement("button");
  nextBtn.className = "pagination-btn";
  nextBtn.id = "next-btn";
  nextBtn.textContent = "Next";
  if (currentPage === totalPages) {
    nextBtn.disabled = true;
  }

  container.appendChild(prevBtn);
  container.appendChild(pageInfo);
  container.appendChild(nextBtn);

  return container;
}

function createStarshipsPagination(currentPage, totalStarships) {
  const maxStarships = Math.min(totalStarships, 20);
  const totalPages = Math.ceil(maxStarships / 10);

  if (totalPages <= 1) {
    return document.createDocumentFragment();
  }

  const container = document.createElement("div");
  container.className = "pagination starships-pagination";

  const prevBtn = document.createElement("button");
  prevBtn.className = "pagination-btn";
  prevBtn.id = "starships-prev-btn";
  prevBtn.textContent = "← Previous";
  if (currentPage === 1) {
    prevBtn.disabled = true;
  }

  const pageInfo = document.createElement("span");
  pageInfo.className = "page-info";
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

  const nextBtn = document.createElement("button");
  nextBtn.className = "pagination-btn";
  nextBtn.id = "starships-next-btn";
  nextBtn.textContent = "Next →";
  if (currentPage === totalPages) {
    nextBtn.disabled = true;
  }

  container.appendChild(prevBtn);
  container.appendChild(pageInfo);
  container.appendChild(nextBtn);

  return container;
}

export function renderTable(characters) {
  const el = document.getElementById("characters-table-placeholder");
  if (!el) {
    console.error("Characters table placeholder not found!");
    return;
  }

  if (!window.charactersState) {
    console.error("window.charactersState is not defined!");
    return;
  }

  const currentPage = window.charactersState.getCurrentPage();
  const totalChars = window.charactersState.getTotalCharacters();

  console.log("Rendering table - Page:", currentPage, "Total:", totalChars);

  el.innerHTML = "";

  const tableElement = createTable(characters);
  const paginationElement = createPagination(currentPage, totalChars);

  el.appendChild(tableElement);
  el.appendChild(paginationElement);

  addPaginationListeners();
}

export function renderStarshipsTable(starships) {
  const el = document.getElementById("starships-table-placeholder");
  if (!el) return;

  const currentPage = window.starshipsState?.getStarshipsCurrentPage
    ? window.starshipsState.getStarshipsCurrentPage()
    : 1;

  const totalStarships = window.starshipsState?.getTotalStarships
    ? window.starshipsState.getTotalStarships()
    : 0;

  el.innerHTML = "";

  const tableElement = createStarshipsTable(starships);
  const paginationElement = createStarshipsPagination(
    currentPage,
    totalStarships,
  );

  el.appendChild(tableElement);
  if (paginationElement.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
    el.appendChild(paginationElement);
  } else if (paginationElement) {
    el.appendChild(paginationElement);
  }

  addStarshipsPaginationListeners();
}

function addPaginationListeners() {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  if (prevBtn) {
    prevBtn.addEventListener("click", async () => {
      const page = window.charactersState.getCurrentPage();
      if (page > 1) {
        window.charactersState.setCurrentPage(page - 1);
        const chars = await window.StarWarsAPI.getCharactersPage(page - 1);
        renderTable(chars);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", async () => {
      const page = window.charactersState.getCurrentPage();
      const total = window.charactersState.getTotalCharacters();

      if (page < Math.min(Math.ceil(total / 10), 2)) {
        window.charactersState.setCurrentPage(page + 1);
        const chars = await window.StarWarsAPI.getCharactersPage(page + 1);
        renderTable(chars);
      }
    });
  }
}

function addStarshipsPaginationListeners() {
  const prevBtn = document.getElementById("starships-prev-btn");
  const nextBtn = document.getElementById("starships-next-btn");

  if (prevBtn) {
    prevBtn.addEventListener("click", async () => {
      const page = window.starshipsState.getStarshipsCurrentPage();
      if (page > 1) {
        window.starshipsState.setStarshipsCurrentPage(page - 1);
        const ships = await window.StarWarsAPI.getStarshipsPage(page - 1);
        renderStarshipsTable(ships);
      }
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", async () => {
      const page = window.starshipsState.getStarshipsCurrentPage();
      const total = window.starshipsState.getTotalStarships();

      if (page < Math.min(Math.ceil(total / 10), 2)) {
        window.starshipsState.setStarshipsCurrentPage(page + 1);
        const ships = await window.StarWarsAPI.getStarshipsPage(page + 1);
        renderStarshipsTable(ships);
      }
    });
  }
}
