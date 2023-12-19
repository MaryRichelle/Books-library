""
import { fetchBooks } from "./modules/bookApi.js"

const searchBar = document.querySelector(".search-bar");
const searchButton = document.querySelector(".search-btn")
function setQuery() {
  const query = searchBar.value.trim().toLowerCase();
  if (query === "") {
    return;
  }
  fetchBooks(query);
  searchBar.value = " "
}
searchButton.addEventListener("click", setQuery)

searchBar.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    setQuery()
  }
});









