let starshipsCurrentPage = 1;
let starshipsTotal = 0;

export function setStarshipsCurrentPage(page) {
  if (page > 0) {
    starshipsCurrentPage = page;
  }
}

export function getStarshipsCurrentPage() {
  return starshipsCurrentPage;
}

export function setTotalStarships(count) {
  if (count >= 0) {
    starshipsTotal = count;
  }
}

export function getTotalStarships() {
  return starshipsTotal;
}