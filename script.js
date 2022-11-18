/* Animação de rolagem */

function scrollsuave() {
  const linksint = document.querySelectorAll('.js-menu a[href^="#"]');
  linksint.forEach((item) => {
    item.addEventListener("click", scrollto);
  });
  function scrollto(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }
}
scrollsuave();
