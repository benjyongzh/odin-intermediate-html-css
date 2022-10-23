const container = document.querySelector('.container');
const mainArea = document.querySelector('.main');

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
    console.log("lmao open");
};

function closeSideBar(event) {
    mainArea.classList.remove('adding-book');
    sideBar.classList.remove('adding-book');
    mainBookAddButton.classList.remove('adding-book');
    mainBookAddButton.textContent = "Add New Book";
    console.log("lmao open");
};

function addNewBook(event){
    //check if form fields are valid
    event.preventDefault();
    const newBookData = new FormData(event.target);
    const formProps = Object.fromEntries(newBookData);
    console.log(formProps);


    /* const newBook = document.createElement("div");
    newBook.classList.add('book');
    const newBookTitle = document.createElement('div');
    newBookTitle.classList.add('book-title'); */
    // newBookTitle
}