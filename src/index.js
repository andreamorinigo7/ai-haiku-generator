function poemGenerator(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "roses are red",
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", poemGenerator);
