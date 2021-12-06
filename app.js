const link = document.querySelector("a");

link.addEventListener("click", handleLinkClick);

function handleLinkClick(potato) {
    potato.preventDefault();
    console.log(potato);
}

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", handleSumbit);

function handleSumbit(event) {
    event.preventDefault();
    console.log(event);
}