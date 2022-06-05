import "../node_modules/focus-visible/dist/focus-visible.js";
import "./scss/main.scss";
import "./index.html";

const navLink = document.getElementsByClassName('nav-list-item');

for (let i = 0; i<navLink.length; i++) {
  navLink[i].addEventListener('click', (event) => {
    event.preventDefault();
    const linkId = document.getElementById(navLink[i].textContent);
    if (linkId === null) return;
    linkId.scrollIntoView({ behavior: "smooth" });
  })
}
