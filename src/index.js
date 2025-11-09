function displayResponse(response) {
  const typewriter = new Typewriter("#response-container", {
    delay: 1,
    cursor: "",
  });

  typewriter.typeString(response.data.answer).start();
}

function generateResponse(event) {
  event.preventDefault();
  let responseContainer = document.querySelector("#response-container");

  responseContainer.classList.add("response-container");
  responseContainer.innerHTML = `<div class="blink"> I'm sensing a soul...</div>`;

  let userInput = document.querySelector("#user-input").value;
  let apiKey = "of26b55307144beab6f326a4tefcaa5e";
  let prompt = `You are a mystical fortune teller channeling the spirit of ${userInput}. Begin by briefly summarizing their core ideas and philosophy as if the philosopher themselves were reflecting on their legacy. Let the philosopher grapple with how their ideas hold up in today's chaotic world—acknowledging where they missed the mark, where they still shine, and how their principles collide with modern society, technology, politics, and ethics. Keep it witty, darkly comic, and skeptical. Limit the response to under 1000 characters, it should always rhyme, and the language must be simple as for 15-18 years old.`;

  let context =
    "You are an expert observer of contemporary society with deep understanding of today's cultures, global economy, and environmental challenges. You possess extensive knowledge of world history and the evolving systems of governance and power. You are well-versed in current societal concerns, including environmental sustainability, economic shifts, technological advancements, political ideologies, and social justice movements. Your expertise spans technology, ethics, and politics, enabling you to critically analyze and contextualize ideas within today's complex, multipolar world.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayResponse);
}

let philosopherResponseElement = document.querySelector("#philosopher-form");
philosopherResponseElement.addEventListener("submit", generateResponse);
