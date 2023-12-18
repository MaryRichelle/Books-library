//@ts-check
export function bookHtmlTemplate(book) {
  return `
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
}