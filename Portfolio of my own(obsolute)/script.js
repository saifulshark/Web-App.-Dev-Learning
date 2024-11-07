// Dynamic typing animation for the about section
const dynamicText = document.getElementById("dynamic-text");
const words = ["Web Developer", "JavaScript Enthusiast", "Tech Explorer"];
let i = 0;
let j = 0;
let currentWord = '';
let isDeleting = false;

function type() {
    currentWord = words[i];
    if (!isDeleting && j <= currentWord.length) {
        dynamicText.textContent = currentWord.slice(0, j++);
        setTimeout(type, 150);
    } else if (isDeleting && j >= 0) {
        dynamicText.textContent = currentWord.slice(0, j--);
        setTimeout(type, 100);
    }

    if (j === currentWord.length && !isDeleting) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (j === 0 && isDeleting) {
        isDeleting = false;
        i = (i + 1) % words.length;
        setTimeout(type, 300);
    }
}

document.addEventListener("DOMContentLoaded", type);

// Form validation
const form = document.querySelector("#contact-form");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form submitted successfully!");
});
