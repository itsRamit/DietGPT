let API_KEY = "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";
const API_URL = "https://api.openai.com/v1/chat/completions";

const promptInput = document.getElementById("userInput");
const sendBtn = document.getElementById("submit-button");
const resultText = document.querySelector(".output");
const dietForm = document.getElementById("Dietform");
const dishNameForm = document.getElementById("DishNameform");
const ingredentsFormContainer = document.getElementById("Ingredentsform");

function DietInputForm() {
  dietForm.style.display = "flex";
  dishNameForm.style.display = "none";
  ingredentsFormContainer.style.display = "none";
}

function GenerateRecipeForm() {
  dietForm.style.display = "none";
  dishNameForm.style.display = "flex";
  ingredentsFormContainer.style.display = "none";
}

function GenerateDishForm() {
  dietForm.style.display = "none";
  dishNameForm.style.display = "none";
  ingredentsFormContainer.style.display = "flex";
}

async function generate() {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + API_KEY,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: promptInput.value }],
      }),
    });
    const data = await response.json();
    console.log(data.choices[0].message.content);
    resultText.innerText = data.choices[0].message.content;
  } catch (e) {}
}

function addNewInput() {
  const newInput = document.createElement("input");
  newInput.type = "text";
  newInput.id = "Ingredents";
  newInput.name = "Ingredents";

  // Append the new input element to the target div
  const targetDiv = document.getElementById("IngredentsFormBox");
  targetDiv.appendChild(newInput);
}
