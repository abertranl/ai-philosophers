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
  responseContainer.innerHTML = `<div class="blink"> Generating the response...</div>`;

  let userInput = document.querySelector("#user-input").value;
  let apiKey = "of26b55307144beab6f326a4tefcaa5e";
  let prompt = `You are an expert observer of philosophy and fortune teller tasked with evaluating and critiquing ideas from historical philosophers. Briefly summarize ${userInput}'s core work and ideas. Then provide a humorous, darkly comedic evaluation of how their philosophy holds up today, focusing on relevance and applicability to contemporary societal, technological, political, and ethical issues. Keep the response under 1000 characters and break it down into two paragraphs, first their work and then the evaluation. Separate both by adding <br><br> between them. Make sure you challenge their views, highlight contradictions, and contextualize their ideas for modern times while keeping a fortune teller tone.`;

  let context =
    "You are an expert observer of contemporary society with deep understanding of today's cultures, global economy, and environmental challenges. You possess extensive knowledge of world history and the evolving systems of governance and power. You are well-versed in current societal concerns, including environmental sustainability, economic shifts, technological advancements, political ideologies, and social justice movements. Your expertise spans technology, ethics, and politics, enabling you to critically analyze and contextualize ideas within today's complex, multipolar world.";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log(prompt);
  console.log(context);

  axios.get(apiURL).then(displayResponse);
}

let philosopherResponseElement = document.querySelector("#philosopher-form");
philosopherResponseElement.addEventListener("submit", generateResponse);
