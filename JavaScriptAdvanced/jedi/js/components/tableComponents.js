function createTable(characters) {
  return `
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair Color</th>
            <th>Skin Color</th>
            <th>Eye Color</th>
            <th>Birth Year</th>
            <th>Gender</th>
            <th>Starships</th>
          </tr>
        </thead>
        <tbody>
          ${characters
            .map(
              (character) => `
            <tr>
              <td>${character.name || "N/A"}</td>
              <td>${character.height || "N/A"}</td>
              <td>${character.mass || "N/A"}</td>
              <td>${character.hair_color || "N/A"}</td>
              <td>${character.skin_color || "N/A"}</td>
              <td>${character.eye_color || "N/A"}</td>
              <td>${character.birth_year || "N/A"}</td>
              <td>${character.gender || "N/A"}</td>
              <td>
                <button class="starships-btn" onclick="showStarships('${character.url}')">
                  🚀 ${character.starships?.length || 0}
                </button>
              </td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

function createStarshipsTable(starships) {
  if (!starships?.length) {
    return `<div class="table-container starships-table"><p style="padding: 20px; color: #00d4ff;">No starships found 🚀</p></div>`;
  }

  return `
    <div class="table-container starships-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Model</th>
            <th>Class</th>
            <th>Manufacturer</th>
            <th>Crew</th>
          </tr>
        </thead>
        <tbody>
          ${starships
            .map(
              (ship) => `
            <tr>
              <td>${ship.name || "N/A"}</td>
              <td>${ship.model || "N/A"}</td>
              <td>${ship.starship_class || "N/A"}</td>
              <td>${ship.manufacturer || "N/A"}</td>
              <td>${ship.crew || "N/A"}</td>
            </tr>
          `,
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;
}

// PAGINERING

function createPagination(currentPage, totalCharacters) {
  const maxCharacters = Math.min(totalCharacters, 20);
  const totalPages = Math.ceil(maxCharacters / 10);
  return `  
    <div class="pagination">
      <button class="pagination-btn" id="prev-btn" ${currentPage === 1 ? "disabled" : ""}>Previous</button>
      <span class="page-info">Page ${currentPage} of ${totalPages}</span>
      <button class="pagination-btn" id="next-btn" ${currentPage === totalPages ? "disabled" : ""}>Next</button>
    </div>
  `;
}

function createStarshipsPagination(currentPage, totalStarships) {
  const maxStarships = Math.min(totalStarships, 20);
  const totalPages = Math.ceil(maxStarships / 10);
  if (totalPages <= 1) return "";

  return `
    <div class="pagination starships-pagination">
      <button class="pagination-btn" id="starships-prev-btn" ${currentPage === 1 ? "disabled" : ""}>← Previous</button>
      <span class="page-info">Page ${currentPage} of ${totalPages}</span>
      <button class="pagination-btn" id="starships-next-btn" ${currentPage === totalPages ? "disabled" : ""}>Next →</button>
    </div>
  `;
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

  el.innerHTML =
    createTable(characters) + createPagination(currentPage, totalChars);
  addPaginationListeners();
}

export function renderStarshipsTable(starships) {
  const el = document.getElementById("starships-table-placeholder");
  if (!el) return;
  el.innerHTML =
    createStarshipsTable(starships) +
    createStarshipsPagination(
      window.starshipsState?.getStarshipsCurrentPage
        ? window.starshipsState.getStarshipsCurrentPage()
        : 1,
      window.starshipsState?.getTotalStarships
        ? window.starshipsState.getTotalStarships()
        : 0,
    );
  addStarshipsPaginationListeners();
}

function addPaginationListeners() {
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");

  prevBtn?.addEventListener("click", async () => {
    const page = window.charactersState.getCurrentPage();
    if (page > 1) {
      window.charactersState.setCurrentPage(page - 1);
      const chars = await window.StarWarsAPI.getCharactersPage(page - 1);
      renderTable(chars);
    }
  });

  nextBtn?.addEventListener("click", async () => {
    const page = window.charactersState.getCurrentPage();
    const total = window.charactersState.getTotalCharacters();

    if (page < Math.min(Math.ceil(total / 10), 2)) {
      window.charactersState.setCurrentPage(page + 1);
      const chars = await window.StarWarsAPI.getCharactersPage(page + 1);
      renderTable(chars);
    }
  });
}
function addStarshipsPaginationListeners() {
  const prevBtn = document.getElementById("starships-prev-btn");
  const nextBtn = document.getElementById("starships-next-btn");

  prevBtn?.addEventListener("click", async () => {
    const page = window.starshipsState.getStarshipsCurrentPage();
    if (page > 1) {
      window.starshipsState.setStarshipsCurrentPage(page - 1);
      const ships = await window.StarWarsAPI.getStarshipsPage(page - 1);
      renderStarshipsTable(ships);
    }
  });

  nextBtn?.addEventListener("click", async () => {
    const page = window.starshipsState.getStarshipsCurrentPage();
    const total = window.starshipsState.getTotalStarships();

    if (page < Math.min(Math.ceil(total / 10), 2)) {
      window.starshipsState.setStarshipsCurrentPage(page + 1);
      const ships = await window.StarWarsAPI.getStarshipsPage(page + 1);
      renderStarshipsTable(ships);
    }
  });
}
