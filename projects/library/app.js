const container = document.querySelector('.container');
const mainArea = document.querySelector('.main');

const mainBookAddButton = document.querySelector(".header>.button-add");
mainBookAddButton.addEventListener('click', openSideBar);

const sideBar = document.querySelector('.sidebar');

const sideBarConfirmButton = sideBar.querySelector('button[type="submit"]');
sideBarConfirmButton.addEventListener('click', addNewBook);
const sideBarCancelButton = sideBar.querySelector('.book-add-cancel');
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
}