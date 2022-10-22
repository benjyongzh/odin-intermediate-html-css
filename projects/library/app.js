const container = document.querySelector('.container');
const mainArea = document.querySelector('.main');

const mainBookAddButton = document.querySelector(".header>.button-add");
mainBookAddButton.addEventListener('click', openSideBar);

const sideBar = document.querySelector('.sidebar');

const sideBarCancelButton = sideBar.querySelector('.book-add-cancel');
sideBarCancelButton.addEventListener('click', closeSideBar);

function openSideBar(event) {
    mainArea.classList.add('adding-book');
    sideBar.classList.add('adding-book');
    console.log("lmao open")
}

function closeSideBar(event) {
    mainArea.classList.remove('adding-book');
    sideBar.classList.remove('adding-book');
    console.log("lmao open")
}