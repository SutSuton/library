let myLibrary = [];
closeForm(); // to ensure the form begins hidden when the page is loaded

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// adding to the Book prototype to remove the current book.

Book.prototype.toggleRead = function() {
  this.read == "Read" ? this.read = "Unread" : this.read = "Read";   
  clearBooks();
  displayBooks();
}

// prototype sandbox above ^^^


function addBookToLibrary(bookObject) {
  myLibrary.push(bookObject);
}

const container = document.querySelector(".container");

function createCard(obj) {
  const card = document.createElement("div");
  card.className = "card";
  container.appendChild(card);

  // card.dataset.number = myLibrary.length; This doesn't quite work as intended. Need to find a way to add a data- attribute as each element is being created

  // Create the elements which will make up each card. Not sure if there is an easier way to do this.
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

  const deleteButton = document.createElement("button");
  deleteButton.className = "delete-button"
  card.appendChild(deleteButton);
  deleteButton.textContent = 'X';
}

// populating the array with placeholder books
let potter = new Book("Harry Potter", "JK Rowling", 500, "read");
addBookToLibrary(potter);

let rings = new Book("Lord of the Rings", "JRR Tolkien", 1000, "unread");
addBookToLibrary(rings);

let chimes = new Book("Chimes", "Anna Smaill", 200, "unread");
addBookToLibrary(chimes);

let catcher = new Book("The Catcher in the Rye", "JD Salinger", 300, "read");
addBookToLibrary(catcher);
addBookToLibrary(catcher);

displayBooks(); // placeholder for now to work on CSS formatting of cards and container area

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    createCard(myLibrary[i]);
  }
}

function clearBooks() {
  container.innerHTML = "";
}

function openForm() {
  document.getElementById("input-form").style.display = "block";
}

function closeForm() {
  document.getElementById("input-form").style.display = "none";
}

const addBookButton = document.getElementById("add-book");
addBookButton.addEventListener("click", openForm);

const cancelButton = document.getElementById("cancel");
cancelButton.addEventListener("click", closeForm);

//Form functionality
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