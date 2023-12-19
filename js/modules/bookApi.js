// @ts-check

import { renderBooks } from './render.js';

export function fetchBooks(query) {
  const maxResults = 10;
  const fullUrl = `https://www.googleapis.com/books/v1/volumes?maxResults=${maxResults}&q=${query}`;

  return fetch(fullUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    }).then(data => {
      const books = data.items;
      renderBooks(books)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
