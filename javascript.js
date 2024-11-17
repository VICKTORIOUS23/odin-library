const container = document.getElementById("container");
const topBar = document.createElement('div');
const newBookButton = document.createElement("button");
const leftNav = document.createElement('div');
const myLibraryBtn = document.createElement('div');
const rightContainer = document.createElement('div');
let books = JSON.parse(localStorage.getItem("books")) || [];
const clearLibraryBtn = document.createElement('div');

    topBar.classList.add('top-bar');
    newBookButton.classList.add('newBookBtn');
    newBookButton.setAttribute('id', 'addBookBtn');
    newBookButton.textContent = "New Book";
    leftNav.classList.add('left-nav-bar');
    leftNav.style.zIndex = "999";
    myLibraryBtn.classList.add('btn-left-nav');
    myLibraryBtn.setAttribute('id', 'libraryBtn')
    myLibraryBtn.textContent = "My library";
    clearLibraryBtn.classList.add('btn-left-nav');
    clearLibraryBtn.setAttribute('id', 'clearLibraryBtn');
    clearLibraryBtn.textContent = "Clear Library";
    rightContainer.classList.add('right-area');

function initiatePage() {
    leftNav.appendChild(myLibraryBtn);
    leftNav.appendChild(clearLibraryBtn);
    topBar.appendChild(newBookButton);
    rightContainer.appendChild(topBar);    
    container.appendChild(leftNav);
    container.appendChild(rightContainer);
}

initiatePage();

function Book(title, author, pages, read, index) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

function addBookToLibrary(title, author, pages, read, index) {
    index=books.length;
    let createBook = new Book(title, author, pages, read, index);

        books.push(createBook);
}

function newBookCard() {
    rightContainer.innerHTML = "";
    initiatePage();
    updateindex();

    books.forEach((book) => {
        const newCard = document.createElement("div");
            newCard.classList.add('card');

           
        
        
        

        const newTitle = document.createElement('div');
            newTitle.textContent = book.title;
            newTitle.classList.add('title');
        newCard.appendChild(newTitle);

        const newAuthor = document.createElement('div');
            newAuthor.textContent = 'by: ' + book.author;
        newCard.appendChild(newAuthor);

        const newPages = document.createElement('div');
            newPages.textContent = book.pages + ' pages';
        newCard.appendChild(newPages);

        const newRead = document.createElement('div');
            let newReadBoo = book.read;
            if (newReadBoo == true) {
                
                newRead.textContent = "I have read this book!";
                newRead.classList.add('green-text');    
            }
                else {
                    newRead.textContent = "I still need to read this!";
                    newRead.classList.add('red-text');
                };
        newCard.appendChild(newRead);

        const updateBtn = document.createElement('div');
                updateBtn.classList.add('flip-btn');
                updateBtn.textContent = "Switch Status";
        newCard.appendChild(updateBtn);

        const removeBtn = document.createElement('button');
            removeBtn.classList.add('remove-btn');
            removeBtn.textContent = "Remove";
            removeBtn.addEventListener("click", function (index) {
                books.splice(index, 1);
                newCard.remove(`book-${index}`);
            });
        newCard.appendChild(removeBtn);        

        
        rightContainer.appendChild(newCard);

        updateBtn.addEventListener("click", () => {
            if (newReadBoo === true) {
                book.read = false;
                localStorage.setItem("books", JSON.stringify(books));
                }
                else {book.read = true;
                    localStorage.setItem("books", JSON.stringify(books));
                };
            
                newBookCard();
            
        })
        

    })


}

newBookCard();

document.getElementById('addBookBtn').addEventListener("click", () => addBookWindow());
document.getElementById('libraryBtn').addEventListener("click", () => newBookCard());
document.getElementById('clearLibraryBtn').addEventListener("click", () => {
    localStorage.clear();
    books = JSON.parse(localStorage.getItem("books")) || [];
    newBookCard();
});

function addBookWindow() {
    const newBookBg = document.createElement('div');
        newBookBg.setAttribute('id', 'new-book-layout');
        newBookBg.classList.add('new-book-window-container');
    const newBookWindow = document.createElement('div');
        newBookWindow.classList.add('new-book-window');
    const newBookHeader = document.createElement('div');
        newBookHeader.classList.add('new-book-header');
        newBookHeader.textContent = "Add New Book!";
    newBookWindow.appendChild(newBookHeader);

    const titleInput = document.createElement('input');
        titleInput.classList.add('book-input');
        titleInput.setAttribute('id', 'title-input');
        titleInput.setAttribute('placeholder', 'Enter your Book Title');
    newBookWindow.appendChild(titleInput);

    const authorInput = document.createElement('input');
        authorInput.classList.add('book-input');
        authorInput.setAttribute('id', 'author-input');
        authorInput.setAttribute('placeholder', 'Enter the Authors Name')
    newBookWindow.appendChild(authorInput);

    const pagesInput = document.createElement('input');
        pagesInput.classList.add('book-input');
        pagesInput.setAttribute('id', 'pages-input');
        pagesInput.setAttribute('placeholder', 'How Many pages?');
    newBookWindow.appendChild(pagesInput);

    const readContainer = document.createElement('div');
        readContainer.classList.add('read-container');
        const readInput = document.createElement('input');
            readInput.setAttribute('type', 'checkbox');
            readInput.setAttribute('id','readId');
        const readLabel = document.createElement('label');
            readLabel.setAttribute('for', 'readId');
            readLabel.textContent = "Have You Read This Yet? ";
        readContainer.appendChild(readLabel);
        readContainer.appendChild(readInput);
    newBookWindow.appendChild(readContainer);

    const submitBtn = document.createElement('div');
        submitBtn.classList.add('new-book-submit');
        submitBtn.setAttribute('id', 'submit-new-book');
        submitBtn.textContent = "Submit New Book";
   
        newBookWindow.appendChild(submitBtn);
        newBookBg.appendChild(newBookWindow);
        container.appendChild(newBookBg);

        document.getElementById('submit-new-book').addEventListener("click", () => {
            if (readInput.checked) {haveRead = true} else {haveRead = false};
            
            addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, haveRead);
            newBookCard();
            container.removeChild(newBookBg);
            
        localStorage.setItem("books",JSON.stringify(books));    
            
        });
}

function updateindex(){
    var index=0;
    books.forEach(element=>{
      element.index=index;
      index++;
    })
  }

  


