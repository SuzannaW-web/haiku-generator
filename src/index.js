function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "words go here",
    autoStart: true,
    delay: 2,
    curor: "",
  });
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
