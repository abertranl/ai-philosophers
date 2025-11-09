function generateResponse(event) {
  event.preventDefault();
  let responseContainer = document.querySelector("#response-container");

  responseContainer.classList.add("response-container");
  
  const typewriter = new Typewriter("#response-container", {
    delay: 1,
    cursor: "",
  });

  typewriter
    .typeString(
      "Immanuel Kant was an 18th-century German philosopher famous for his work in ethics and epistemology. His key idea, the categorical imperative, demands that we act only according to rules we'd want everyone to follow, making morality universal and absolute. Kant emphasized reason, duty, and autonomy, arguing that good actions come from rational duty, not consequences or feelings. But applying Kant today feels like trying to run social media on pure logic—impractical and sometimes absurd. In our world of endless scrolling, personalized algorithms, and moral gray zones, Kant’s strict moral laws clash with modern reality where ethics are messy and context-driven. If society truly followed Kant’s rules, online life would be a bore, PR would vanish, and spontaneity die. So while Kant aimed for a rational moral utopia, today we live in a chaotic algorithm playground where reason often takes a backseat. His ideas make great philosophy, but maybe terrible Twitter policy."
    )
    .start();
}

let philosopherResponseElement = document.querySelector("#philosopher-form");
philosopherResponseElement.addEventListener("submit", generateResponse);
