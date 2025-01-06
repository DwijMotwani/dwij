//Activating Mobile Menu

const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};

showMenu("nav-toggle", "nav-menu");

//Toggling Menu by clicking in mobile menu links

const navLink = document.querySelectorAll(".nav-link");

function linkAction(event) {
  event.preventDefault(); // Prevent default anchor behavior

  navLink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  const targetId = this.getAttribute("href").substring(1); // Get section ID
  const targetSection = document.getElementById(targetId);

  // Adjust for the fixed header
  const offset = 70; // Adjust to your header's height
  const targetPosition = targetSection.offsetTop - offset;

  window.scrollTo({
    top: targetPosition,
    behavior: "smooth",
  });

  // Manually update active class after smooth scroll
  setTimeout(() => {
    scrollActive();
  }, 500);

  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show");
}


navLink.forEach((n) => n.addEventListener("click", linkAction));


navLink.forEach((n) => n.addEventListener("click", linkAction));

// Changing Active Menu section while scrolling

const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", scrollActive);

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight; // Get the height of the current section
    const sectionTop = current.offsetTop - 70; // Offset for the fixed header
    const sectionId = current.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active");
    }
  });
}


// Scroll Reveal Settings

// const sr = ScrollReveal({
//   origin: "top",
//   distance: "10px",
//   duration: 2000,
//   reset: true,
// });

// sr.reveal(".home-title", {});
// sr.reveal(".home-scroll", { delay: 200 });
// sr.reveal(".home-img", { origin: "right", delay: 400 });

// sr.reveal(".about-img", { delay: 500 });
// sr.reveal(".about-subtitle", { delay: 300 });
// sr.reveal(".about-profession", { delay: 400 });
// sr.reveal(".about-text", { delay: 500 });
// sr.reveal(".about-social-icon", { delay: 600, interval: 200 });

// sr.reveal(".skills-subtitle", {});
// sr.reveal(".skills-name", { distance: "20px", delay: 50, interval: 100 });
// sr.reveal(".skills-img", { delay: 400 });

// sr.reveal(".portfolio-img", { interval: 200 });

// sr.reveal(".contact-subtitle", {});
// sr.reveal(".contact-text", { interval: 200 });
// sr.reveal(".contact-input", { delay: 400 });
// sr.reveal(".contact-button", { delay: 600 });

document.addEventListener("DOMContentLoaded", function () {
  const words = [
    "UI/UX Designer",
    "Product Designer",
    "Web Designer",
    "Web Developer",
    "Gamer",
  ];
  let currentWordIndex = 0;
  let currentLetterIndex = 0;
  let typingElement = document.getElementById("typing-effect");

  function typeWord() {
    let currentWord = words[currentWordIndex];

    // Type the current word letter by letter
    typingElement.innerHTML = currentWord.substring(0, currentLetterIndex);
    currentLetterIndex++;

    if (currentLetterIndex <= currentWord.length) {
      setTimeout(typeWord, 250); // Speed of typing
    } else {
      setTimeout(() => {
        // Wait before deleting the word and start the next one
        currentLetterIndex = 0;
        currentWordIndex = (currentWordIndex + 1) % words.length;
        typingElement.innerHTML = ""; // Clear the current word

        // Start typing the next word after delay
        setTimeout(typeWord, 500); // Delay before starting the next word
      }, 2000); // Delay before deleting the word
    }
  }

  // Start the typing animation
  typeWord();
});



document.addEventListener("DOMContentLoaded", function () {
  // Automatically filter and show the "all" section when the page loads
  filterPortfolio("all");
});

function filterPortfolio(filter) {
  // Remove the active class from all portfolio items
  const portfolioItems = document.querySelectorAll(".portfolio-item");
  portfolioItems.forEach(function (item) {
    item.style.display = "none"; // Hide all items initially
  });

  // If 'all' is selected, show all items
  if (filter === "all") {
    portfolioItems.forEach(function (item) {
      item.style.display = "block";
    });
  } else {
    // Show only the items with the corresponding filter class
    const filteredItems = document.querySelectorAll(`.${filter}`);
    filteredItems.forEach(function (item) {
      item.style.display = "block";
    });
  }

  // Update active class for navigation
  const links = document.querySelectorAll(".portfolio-nav a");
  links.forEach(function (link) {
    link.classList.remove("active");
  });
  const activeLink = document.querySelector(
    `.portfolio-nav a[href="#${filter}"]`
  );
  if (activeLink) {
    activeLink.classList.add("active");
  }
}

function openModal(imageSrc) {
  const modal = document.getElementById("lightbox-modal");
  const modalImage = document.getElementById("modal-image");

  // Set the image source to the clicked image source
  modalImage.src = imageSrc;
  modal.style.display = "flex";
}

function closeModal() {
  const modal = document.getElementById("lightbox-modal");
  modal.style.display = "none";
}


