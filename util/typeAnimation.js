export default function typeWriter(text, elementId, speed) {
  let i = 0; // Tracks the number of resolved characters
  const targetElement = document.getElementById(elementId);

  if (!targetElement) {
    console.error(`Element with ID "${elementId}" not found.`);
    return;
  }

  const targetLength = text.length;

  // Start the animation loop
  function type() {
    if (i <= targetLength) {
      // Part 1: The resolved text
      // This is the correct text from the beginning up to index 'i'
      const resolvedText = text.substring(0, i);

      // Part 2: The unresolved "scramble" text
      let unresolvedScramble = "";
      for (let j = i; j < targetLength; j++) {
        // Preserve spaces for a cleaner, more readable effect
        if (text.charAt(j) === " ") {
          unresolvedScramble += " ";
        } else {
          // Add a random '0' or '1'
          unresolvedScramble += Math.random() < 0.5 ? "0" : "1";
        }
      }

      // Combine the two parts.
      // We wrap the scramble in a span to give it a different style (see CSS)
      // Note: This requires the calling HTML to have a ".scramble" CSS class.
      targetElement.innerHTML =
        resolvedText + `<span class="scramble">${unresolvedScramble}</span>`;

      // Move to the next character
      i++;

      // Call the next frame
      setTimeout(type, speed);
    } else {
      // Animation finished, ensure cursor is at the end
      targetElement.innerHTML = text;
    }
  }

  // Clear existing content and start the typing animation
  targetElement.innerHTML = "";
  type();
}
