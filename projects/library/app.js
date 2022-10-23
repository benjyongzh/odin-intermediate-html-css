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

function openSideBar(event) {
    if (event.target.classList.contains('adding-book')) return;
    mainArea.classList.add('adding-book');
    sideBar.classList.add('adding-book');
    event.target.classList.add('adding-book');
    event.target.textContent = "Adding New Book...";
    /* console.log("lmao open"); */
};

function closeSideBar(event) {
    mainArea.classList.remove('adding-book');
    sideBar.classList.remove('adding-book');
    mainBookAddButton.classList.remove('adding-book');
    mainBookAddButton.textContent = "Add New Book";
    /* console.log("lmao close"); */
    /* sideBarForm.reset(); */
};

function addNewBook(event){
    //add new book
    event.preventDefault();
    const newBookData = new FormData(event.target);
    const formProps = Object.fromEntries(newBookData);
    console.log(formProps);

    const newBook = document.createElement("div");
    newBook.classList.add('book');
    booksArea.appendChild(newBook);

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
    
    //check read status
    if (formProps.bookReadStatus) {
        newBook.classList.add('book-status-read');
        newBookButtonRead.textContent = 'Un-read';
    }

    //clear form
    event.target.reset();
}

function toggleReadStatus(event) {
    //find book parent
    const bookParent = event.target.parentElement.parentElement;
    //toggle status
    bookParent.classList.toggle('book-status-read');
    if (event.target.textContent == "Read") {
        event.target.textContent = "Un-read";
    } else {
        event.target.textContent = "Read";
    };
}

function removeBook(event) {
    //find book parent
    const bookParent = event.target.parentElement.parentElement;
    //delete book
    bookParent.remove();
}