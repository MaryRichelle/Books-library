//@ts-check
export function bookHtmlTemplate(book) {
  return `
        <div class="book" data-book=${book.id}></div>
        <div class="front"></div>
        <div class="buttons">
        <a href="#">Look inside</a><a href="#">Details</a>
        </div>
        <figcaption>
          <h2>${book.volumeInfo.title ?? "book title"}
            <span>${book.volumeInfo.authors ?? "author"}</span>
          </h2>
        </figcaption>
        <div class="details">
          <ul>
            <li>${book.volumeInfo.description || "description"} </li>
            <li>${book.volumeInfo.publisher || "publisher"}</li>
            <li>${book.volumeInfo.publishedDate || "publishedDate"}</li>
            <li>${book.volumeInfo.pageCount || "book.volumeInfo.pageCount"}</li>
          </ul>
        </div>
       
    `;
}