window.onload = function() {
    const greetingElement = document.getElementById('greeting');
    const date = new Date();
    const hours = date.getHours();

    if (hours < 12) {
        greetingElement.textContent = "Goedemorgen! Welkom op mijn portfolio!";
    } else if (hours < 18) {
        greetingElement.textContent = "Goedemiddag! Welkom op mijn portfolio!";
    } else {
        greetingElement.textContent = "Goedenavond! Welkom op mijn portfolio!";
    }
};
