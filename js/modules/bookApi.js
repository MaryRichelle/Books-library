export function fetchBooks(maxResults, query) {
  const fullUrl = `https://www.googleapis.com/books/v1/volumes?maxResults=${maxResults}&q=${query}`;

  return fetch(fullUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    });
}
