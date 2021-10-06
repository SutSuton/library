let myLibrary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return title + " by " + author + ", " + pages + ", " + read
  }
}

let userInput; // placeholder for now until I figure out how the user will interact with the website
function addBookToLibrary() {
  myLibrary.push(userInput);
}

const container = document.querySelector(".container");

function createCard() {
  const card = document.createElement("div");
  card.className = "card";
  container.appendChild(card);
}


function displayBooks() {

}

