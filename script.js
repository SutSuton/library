let myLibrary = [];
closeForm();

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.index = myLibrary.length + 1;
}

Book.prototype.toggleRead = function() {
  this.read == "Read" ? this.read = "Unread" : this.read = "Read";   
  clearBooks();
  displayBooks();
}

const container = document.querySelector(".container");

function createCard(obj) {
  const card = document.createElement("div");
  card.className = "card";
  container.appendChild(card);
  card.dataset.index = obj.index;

  const title = document.createElement("div");
  title.className = "title";
  card.appendChild(title);
  title.textContent = obj.title;

  const author = document.createElement("div");
  author.className = "author";
  card.appendChild(author);
  author.textContent = obj.author;

  const pages = document.createElement("div");
  pages.className = "pages";
  card.appendChild(pages);
  pages.textContent = obj.pages + " pages";

  const read = document.createElement("div");
  read.className = "read";
  card.appendChild(read);
  read.textContent = obj.read;

  const buttonDiv = document.createElement("div");
  buttonDiv.className = "button-div";
  card.appendChild(buttonDiv);

  const readButton = document.createElement("button");
  buttonDiv.appendChild(readButton);
  readButton.className = "read-button"
  readButton.textContent = "Mark as read/unread";
  readButton.addEventListener("click", function(e) {
    obj.toggleRead();
  });

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button"
  buttonDiv.appendChild(deleteButton);
  deleteButton.textContent = 'delete';
  deleteButton.addEventListener("click", function(e) {
    myLibrary.splice(myLibrary.indexOf(obj), 1);
    clearBooks();
    displayBooks();
  });
}

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    createCard(myLibrary[i]);
  }
}

function closeForm() {
  document.getElementById("input-form").style.display = "none"
}

function clearBooks() {
  container.innerHTML = "";
}

const addBookButton = document.getElementById("add-book");
addBookButton.addEventListener("click", function(e) {
  document.getElementById("input-form").style.display = "block";
});

const cancelButton = document.getElementById("cancel");
cancelButton.addEventListener("click", closeForm);


function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
}

const addBookForm = document.forms['new-book'];
addBookForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const formTitle = document.querySelector(".title-input").value;
  const formAuthor = document.querySelector(".author-input").value;
  const formPages = document.querySelector(".pages-input").value;
  const formRead = document.querySelector('input[name="read"]:checked').value;
  let userInput = new Book(formTitle, formAuthor, formPages, formRead);
  addBookToLibrary(userInput);
  clearBooks();
  displayBooks();
  closeForm();
});