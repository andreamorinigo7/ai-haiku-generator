function displayPoem(response) {
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 3,
    cursor: null,
  });
}

function poemGenerator(event) {
  event.preventDefault();

  let inputInstruction = document.querySelector("#input-instruction");
  let apiKey = "o7aa001199a3fa308a4b424t253e2953";
  let context =
    "You are an expert romantic Haiku writer. Your mission is to generate a haiku poem in basic HTML and separate each line with <br />. Make sure to follow user instructions. Please do not title the poem or add any other marks like '' or words like 'html'. Sign the poem with 'Made with ❤️ by AI' inside a <strong> element only at the end of the poem.";
  let prompt = `User instructions: Generate a haiku poem about${inputInstruction.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a haiku about ${inputInstruction.value}</div>`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", poemGenerator);
