let currentPage = 1;
let totalCharacters = 0;

export function setCurrentPage(page) {
  if (page > 0) {
    currentPage = page;
  }
}

export function getCurrentPage() {
  return currentPage;
}

export function setTotalCharacters(count) {
  if (count >= 0) {
    totalCharacters = count;
  }
}

export function getTotalCharacters() {
  return totalCharacters;
}

