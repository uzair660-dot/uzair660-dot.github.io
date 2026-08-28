// ============================================
// script.js
// This file adds INTERACTIVITY to the page.
// ============================================

// -------- 1. Hamburger menu toggle --------
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
});

// -------- 2. Contact form handling --------
// getElementById returns "null" if an element doesn't exist on the current page.
// Since contact-form only exists on contact.html, we check it exists first —
// otherwise this code would cause an error on index.html and about.html.
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  const statusMsg = document.getElementById("form-status");

  // "submit" fires when the user clicks the Send Message button
  contactForm.addEventListener("submit", function (event) {
    // preventDefault() stops the browser's default action (which would
    // reload the page). We want to handle it ourselves instead.
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Basic validation — trim() removes accidental spaces, then we check length
    if (name === "" || email === "" || message === "") {
      statusMsg.textContent = "Please fill in all fields.";
      statusMsg.style.color = "#ff6b6b"; // red for error
      return; // stops the function here, doesn't send anything
    }

    // Build a mailto: link with the form data pre-filled, then open it.
    // This opens the visitor's email app (Gmail, Outlook, etc.) with the
    // message ready to send — no backend server needed.
    const subject = encodeURIComponent("Message from " + name);
    const body = encodeURIComponent(message + "\n\nFrom: " + name + " (" + email + ")");
    window.location.href = "mailto:uzairaslam660@gmail.com?subject=" + subject + "&body=" + body;

    statusMsg.textContent = "Opening your email app...";
    statusMsg.style.color = "#6c63ff"; // purple for success
  });
}

// -------- 3. Page open/close fade transition --------
// As soon as the page finishes loading, add "loaded" to fade it IN smoothly
// (the CSS starts every page invisible, then this reveals it).
window.addEventListener("DOMContentLoaded", function () {
  document.body.classList.add("loaded");
});

// When someone clicks an internal link (Home / About / Contact), instead of
// jumping instantly to the new page, we fade the current page OUT first,
// wait for the fade to finish, then actually navigate.
const internalLinks = document.querySelectorAll('a[href$=".html"]');

internalLinks.forEach(function (link) {
  link.addEventListener("click", function (event) {
    const destination = this.getAttribute("href");

    event.preventDefault(); // stop the instant jump
    document.body.classList.remove("loaded");
    document.body.classList.add("fade-out");

    // Wait 300ms (matching the CSS transition time) before actually leaving
    setTimeout(function () {
      window.location.href = destination;
    }, 300);
  });
});

// -------- 4. Scroll animations for images and cards --------
// IntersectionObserver watches elements and tells us when they enter the
// visible part of the screen ("viewport") as the user scrolls.
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        // Element has scrolled into view — trigger its CSS animation
        entry.target.classList.add("in-view");
        // Stop watching it — we only want this animation to play once
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 } // triggers once 15% of the element is visible
);

revealElements.forEach(function (el) {
  revealObserver.observe(el);
});
