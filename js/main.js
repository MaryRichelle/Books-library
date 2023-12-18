// @ts-check

import { renderBooks } from './modules/render.js';

const maxResults = 40; // numbers of books 
const query = 'computing'; // change query of your choice 


const fullUrl = `https://www.googleapis.com/books/v1/volumes?maxResults=${maxResults}&q=${query}`;

// HTTP GET request using Fetch api
fetch(fullUrl)
  .then(response => {
    if (!response.ok) { // if request is not full filled (network error) throw error 
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    const books = data.items;
    renderBooks(books)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });






