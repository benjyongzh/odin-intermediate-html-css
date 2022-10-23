const container = document.querySelector('.container');
const mainArea = document.querySelector('.main');
const booksArea = mainArea.querySelector('.books');

const mainBookAddButton = document.querySelector(".header>.button-add");
mainBookAddButton.addEventListener('click', openSideBar);

const sideBar = document.querySelector('.sidebar');

const sideBarForm = sideBar.querySelector('form');
sideBarForm.addEventListener('submit', addNewBook);

const sideBarConfirmButton = sideBarForm.querySelector('button[type="submit"]');
/* sideBarConfirmButton.addEventListener('click', addNewBook); */
const sideBarCancelButton = sideBarForm.querySelector('.book-add-cancel');
sideBarCancelButton.addEventListener('click', closeSideBar);

let myLibrary = [];

function openSideBar(event) {
    if (event.target.classList.contains('adding-book')) return;
    mainArea.classList.add('adding-book');
    sideBar.classList.add('adding-book');
    event.target.classList.add('adding-book');
    event.target.textContent = "Adding New Book...";
};

function closeSideBar(event) {
    mainArea.classList.remove('adding-book');
    sideBar.classList.remove('adding-book');
    mainBookAddButton.classList.remove('adding-book');
    mainBookAddButton.textContent = "Add New Book";
};

function book(bookName, bookAuthor="undefined", bookPages="0", bookReadStatus=false) {
    return {bookName, bookAuthor, bookPages, bookReadStatus};
}

book.prototype.toggleRead = () => {
    this.bookReadStatus = !this.bookReadStatus;
    this.component.classList.toggle('book-status-read');
    const buttonRead = this.component.querySelector('button.book-button-read');
    console.log(buttonRead);
    if (buttonRead.textContent == "Read") {
        buttonRead.textContent = "Un-read";
    } else {
        buttonRead.textContent = "Read";
    };
    console.log(`book status is now $(this.bookReadStatus)`);
};

function addNewBook(event){
    //add new book
    event.preventDefault();
    const newBookData = new FormData(event.target);
    const formProps = Object.fromEntries(newBookData);
    //console.log(formProps);
    const newBookObject = new book(
        formProps.bookName,
        formProps.bookAuthor,
        formProps.bookPages,
        formProps.bookReadStatus,
    );

    const newBook = document.createElement("div");
    newBook.classList.add('book');
    booksArea.appendChild(newBook);

    const newBookBackground = document.createElement('div');
    newBookBackground.classList.add('book-background');
    let randomNumber = Math.floor(Math.random()*1000);
    newBookBackground.style.backgroundImage = `url('https://picsum.photos/seed/${randomNumber}/300/400')`;
    newBook.appendChild(newBookBackground);

    const newBookTitle = document.createElement('div');
    newBookTitle.classList.add('book-title');
    newBookTitle.textContent = formProps.bookName;
    newBook.appendChild(newBookTitle);

    const newBookButtonArea = document.createElement('div');
    newBookButtonArea.classList.add('book-button-area');
    newBook.appendChild(newBookButtonArea);

    const newBookButtonRead = document.createElement('button');
    newBookButtonRead.classList.add('book-button-read');
    newBookButtonRead.textContent = 'Read';
    newBookButtonRead.addEventListener('click', toggleReadStatus);
    newBookButtonArea.appendChild(newBookButtonRead);

    const newBookButtonRemove = document.createElement('button');
    newBookButtonRemove.classList.add('book-button-remove');
    newBookButtonRemove.textContent = 'Remove';
    newBookButtonRemove.addEventListener('click', removeBook);
    newBookButtonArea.appendChild(newBookButtonRemove);

    //add html book into book object
    newBookObject.component = newBook;
    
    //check read status
    if (formProps.bookReadStatus) {
        newBook.classList.add('book-status-read');
        newBookButtonRead.textContent = 'Un-read';
    }

    //clear form
    event.target.reset();

    //add book object to library array
    myLibrary.push(newBookObject);
    //console.log(myLibrary);
}

function toggleReadStatus(event) {
    //find book parent
    const bookObject = myLibrary.filter(book => book.component.querySelector('button.book-button-read') == event.target)[0];
    //toggle status
    bookObject.toggleRead();
}

function removeBook(event) {
    //find book parent
    // const bookObject = myLibrary.filter(book => book.component.querySelector('button.book-button-read') == event.target);
    const bookParent = event.target.parentElement.parentElement;
    //delete book
    bookParent.remove();
}