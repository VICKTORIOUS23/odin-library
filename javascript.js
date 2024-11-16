const myLibrary = [];
const container = document.getElementById("container");
const topBar = document.createElement('div');
    topBar.classList.add('top-bar');
const newBookButton = document.createElement("button");
    newBookButton.classList.add('newBookBtn');
    newBookButton.textContent = "New Book";
topBar.appendChild(newBookButton);
container.appendChild(topBar);

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const testbook3 = new Book("The Curious Incident of the Dog in the Night-Time", "Mark Haddon", 745, false);
const testbook = new Book("testTitle", "testAuthor", 453, true);
const testbook2 = new Book("what","nope",54,false);
myLibrary.push(testbook);
myLibrary.push(testbook2);
myLibrary.push(testbook3);

function addBookToLibrary() {
    let createBook = new Book(title, author, pages, read);
        myLibrary.push(createBook);   
}

function newBookCard() {
    for (i=0; i < myLibrary.length; i++) {
        const newCard = document.createElement("div");
            newCard.classList.add('card');
        const newTitle = document.createElement("div");
        const newAuthor = document.createElement("div");
        const newPages = document.createElement("div");
        const newRead = document.createElement("div");
            newTitle.textContent = myLibrary[i].title;
            newTitle.classList.add('title');
            newAuthor.textContent = myLibrary[i].author;
            newPages.textContent = myLibrary[i].pages;
            newRead.textContent = myLibrary[i].read;
        
        newCard.appendChild(newTitle);
        newCard.appendChild(newAuthor);
        newCard.appendChild(newPages);
        newCard.appendChild(newRead);
        container.appendChild(newCard);
        }
}

newBookCard();

