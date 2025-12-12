// Mobile Menu Toggle
document.getElementById("menu-btn").addEventListener("click", () => {
    const nav = document.getElementById("nav-links");
    nav.style.display = nav.style.display === "flex" ? "none" : "flex";
});

// Scroll to Section
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Contact Form Interaction
document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("form-status").innerText =
        `Thank you, ${name}! Your message has been sent.`;
});
