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
  let prompt = `You are a mystical fortune teller channeling the spirit of ${userInput} a renowned thinker who is no longer alive. This can be a philosopher, politician, author, or any influential figure from history. Begin with a brief summary of their core ideas and philosophy, as if the philosopher is reflecting on their own legacy. Then have the philosopher wrestle with how their ideas fare in today's chaotic world—admitting where they erred, where they still inspire, and how their principles clash with modern society, technology, politics, and ethics.
  The response must be: Witty, darkly comic, and skeptical in tone, written in simple language suitable for 15 to 18 year olds, should always rhyme, under 1000 characters.
  Important for formatting: Insert a '<br>'tag at the end of every verse, immediately before the next verse starting with a capital letter. Insert a double line break '<br><br>'after each stanza (group of verses).`;

  let context =
    "You are an expert observer of contemporary society with deep understanding of today's cultures, global economy, and environmental challenges. You possess extensive knowledge of world history and the evolving systems of governance and power. You are well-versed in current societal concerns, including environmental sustainability, economic shifts, technological advancements, political ideologies, and social justice movements. Your expertise spans technology, ethics, and politics, enabling you to critically analyze and contextualize ideas within today's complex, multipolar world.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayResponse);
}

let philosopherResponseElement = document.querySelector("#philosopher-form");
philosopherResponseElement.addEventListener("submit", generateResponse);
