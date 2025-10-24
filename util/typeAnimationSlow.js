function typeWriter(text, elementId, speed) {
  let i = 0;
  const targetElement = document.getElementById(elementId);
  targetElement.innerHTML = ""; // Clear existing content

  function type() {
    if (i < text.length) {
      targetElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

export default typeWriter;

// Usage:
// <p id="typing-text"></p>
// typeWriter("This is a typing animation!", "typing-text", 70);
