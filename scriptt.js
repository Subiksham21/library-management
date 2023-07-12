function searchBooks() {
    var input, filter, ul, li, title, author, publication;
    input = document.getElementById('searchInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById('bookList');
    li = ul.getElementsByTagName('li');
  
    for (var i = 0; i < li.length; i++) {
      title = li[i].querySelector('.book-title');
      author = li[i].querySelector('.book-author');
      publication = li[i].querySelector('.book-publication');
      if (title.innerText.toUpperCase().indexOf(filter) > -1 ||
          author.innerText.toUpperCase().indexOf(filter) > -1 ||
          publication.innerText.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }
  
  document.getElementById('addBookForm').addEventListener('submit', function (event) {
    event.preventDefault();
    var titleInput = document.getElementById('title');
    var authorInput = document.getElementById('author');
    var publicationInput = document.getElementById('publication');
  
    var ul = document.getElementById('bookList');
    var li = document.createElement('li');
    var bookInfo = document.createElement('div');
    bookInfo.classList.add('book-info');
  
    var bookTitle = document.createElement('h2');
    bookTitle.classList.add('book-title');
    bookTitle.textContent = titleInput.value;
  
    var bookAuthor = document.createElement('p');
    bookAuthor.classList.add('book-author');
    bookAuthor.textContent = authorInput.value;
  
    var bookPublication = document.createElement('p');
    bookPublication.classList.add('book-publication');
    bookPublication.textContent = publicationInput.value;
  
    bookInfo.appendChild(bookTitle);
    bookInfo.appendChild(bookAuthor);
    bookInfo.appendChild(bookPublication);
    li.appendChild(bookInfo);
    ul.appendChild(li);
  
    titleInput.value = '';
    authorInput.value = '';
    publicationInput.value = '';
  });