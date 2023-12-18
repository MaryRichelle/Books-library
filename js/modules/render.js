
import { bookHtmlTemplate } from "./bookHtmlTemplate.js"
export function renderBooks(books) {
  const bookshelf = document.getElementById("bookshelf");
  books.forEach(book => {
    const figure = document.createElement("figure"); 
    figure.innerHTML = bookHtmlTemplate(book)
    bookshelf.appendChild(figure);
    const frontDiv = figure.querySelector(".book");
    const imageUrl = book.volumeInfo.imageLinks.thumbnail;
    frontDiv.style.background = imageUrl ? `url(${imageUrl})` : url("../../img/alternative-image.png");
  });
}
