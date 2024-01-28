let API_KEY = "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";
const API_URL = "https://api.openai.com/v1/chat/completions";

const promptInput = document.getElementById("userInput");
const sendBtn = document.getElementById("submit-button");
const resultText = document.querySelector(".output");

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
