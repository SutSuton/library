let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = function () {
  //   return title + " by " + author + ", " + pages + ", " + read
        // Seems unneccessary to the current task to include this function.
  // }
}

let userInput; // placeholder for now until I figure out how the user will interact with the website
function addBookToLibrary() {
  myLibrary.push(userInput);
}

const container = document.querySelector(".container");

function createCard(obj) {
  const card = document.createElement("div");
  card.className = "card";
  container.appendChild(card);

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
  pages.textContent = obj.pages;

  const read = document.createElement("div");
  read.className = "read";
  card.appendChild(read);
  read.textContent = obj.read;
}

// populating the array with placeholder books
let potter = new Book("Harry Potter", "JK Rowling", 500, "read");
userInput = potter;
addBookToLibrary();

let rings = new Book("Lord of the Rings", "JRR Tolkien", 1000, "unread");
userInput = rings;
addBookToLibrary();

let chimes = new Book("Chimes", "Anna Smaill", 200, "unread");
userInput = chimes;
addBookToLibrary();

let catcher = new Book("The Catcher in the Rye", "JD Salinger", 300, "read");
userInput = catcher;
addBookToLibrary();

function displayBooks() {
  for (let i = 0; i < myLibrary.length; i++) {
    createCard(myLibrary[i]);
  }
}

