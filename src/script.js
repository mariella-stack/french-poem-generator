function displayPoem(response) {
    console.log("poem generated");
    new Typewriter("#poem", {
        strings: response.data.answer,
        autoStart: true,
        delay: 75,
        cursor: "",
      });
    }

function generatePoem(event) {
    event.preventDefault();


// build the API URL
let instructionsInput = document.querySelector("#user-instructions")
let apiKey = "58ca0f5cbec7bta7cefa3ffa3o04436b";
let prompt =`User instructions are: Generate a German poem about ${instructionsInput.value}`
let context = "Your are a romantic poem expert and love to write short poems. Your mission is to generate a 4 line poem in basic html and separate each line with a <br>. Please don't start the poem with ```` html. Please don't use any introductory sentence, just start with the poem right away. Please sign the poem at the end using the words SheCodes AI. Make sure to follow the user instructions"
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

console.log("Generating poem");
console.log(`Prompt:${prompt}`);
console.log(`Context: ${context}`);

// make a call to the API
axios.get(apiUrl).then(displayPoem)
}
// Display the generated poem



let poemFormElement = document.querySelector ("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);



