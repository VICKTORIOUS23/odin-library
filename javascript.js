const myLibrary = [];
const container = document.getElementById("container");
const topBar = document.createElement('div');
    topBar.classList.add('top-bar');
const newBookButton = document.createElement("button");
    newBookButton.classList.add('newBookBtn');
    newBookButton.setAttribute('id', 'addBookBtn');
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

function addBookToLibrary(title, author, pages, read) {
    let createBook = new Book(title, author, pages, read);
        myLibrary.push(createBook);   
}

function newBookCard() {
    container.innerHTML = "";
    topBar.appendChild(newBookButton);
    container.appendChild(topBar);

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



document.getElementById('addBookBtn').addEventListener("click", () => addBookWindow());


function addBookWindow() {
    const newBookBg = document.createElement('div');
        newBookBg.setAttribute('id', 'new-book-layout');
        newBookBg.classList.add('new-book-window-container');
    const newBookWindow = document.createElement('div');
        newBookWindow.classList.add('new-book-window');
    const titleInput = document.createElement('input');
        titleInput.classList.add('book-input');
        titleInput.setAttribute('id', 'title-input');
    const authorInput = document.createElement('input');
        authorInput.classList.add('book-input');
        authorInput.setAttribute('id', 'author-input');
    const pagesInput = document.createElement('input');
        pagesInput.classList.add('book-input');
        pagesInput.setAttribute('id', 'pages-input');
    const submitBtn = document.createElement('button');
        submitBtn.setAttribute('id', 'submit-new-book');
        submitBtn.textContent = "Submit New Book";
    const newTitle = document.getElementById('title-input');

    

        
        newBookWindow.appendChild(titleInput);
        newBookWindow.appendChild(authorInput);
        newBookWindow.appendChild(pagesInput);
        newBookWindow.appendChild(submitBtn);
        newBookBg.appendChild(newBookWindow);
        container.appendChild(newBookBg);

        document.getElementById('submit-new-book').addEventListener("click", () => {
            
            addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, false);
            newBookCard();
            container.removeChild(newBookBg);
            
            
            
        });
}

newBookCard();






