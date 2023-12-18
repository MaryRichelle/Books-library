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


function renderBooks(books) {
  const bookshelf = document.getElementById("bookshelf");
  books.forEach(book => {
    const figure = document.createElement("figure");
    figure.innerHTML = `

        <div class="book" data-book=${book.id}></div>
        <div class="front"></div>
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
        <div class="details">
						<ul>
							<li>${book.searchInfo.textSnippet}</li>
							<li>${book.volumeInfo.authors}</li>
							<li>${book.volumeInfo.publishedDate}</li>
							<li>${book.volumeInfo.pageCount} pages</li>
						</ul>
					</div>
    `;
    bookshelf.appendChild(figure);
    let frontDiv = figure.querySelector(".book");
    const imageUrl = book.volumeInfo.imageLinks.thumbnail;
    frontDiv.style.background = imageUrl ? "url('" + imageUrl + "')" : "red"
  });
}
