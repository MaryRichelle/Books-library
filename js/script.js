const apiUrl = 'https://www.googleapis.com/books/v1/volumes';
const maxResults = 40;
const query = 'motivation';


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
    console.log('books:', books);
    renderBooks(books)
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });


function renderBooks(books) {
  const bookshelf = document.getElementById("bookshelf");
  const front = document.querySelector(".front");
  books.forEach(book => {
    const figure = document.createElement("figure");

    figure.innerHTML = `
    
        <img class="front" src=${book.volumeInfo.imageLinks.thumbnail} >
        <div class="book" data-book=${book.id}></div>
        <div class="buttons"><a href="#">Look inside</a><a href="#">Details</a></div>
        <figcaption>
          <h2>${book.volumeInfo.title}<span>${book.volumeInfo.authors}</span></h2>
        </figcaption>
        <div class="details">
          <ul>
            <li>${book.volumeInfo.description}</li>
            <li>${book.volumeInfo.publisher}</li>
            <li>${book.volumeInfo.publishedDate}</li>
            <li>${book.volumeInfo.pageCount}</li>
          </ul>
        </div>
    `;
   
     bookshelf.appendChild(figure);
  });
}
