export function searchQuery() {
  document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.querySelector(".search-bar");
    console.log(searchBar);

    searchBar.addEventListener("input", function () {
      const query = searchBar.value.trim().toLowerCase();
      console.log(query);
    });
  });
}