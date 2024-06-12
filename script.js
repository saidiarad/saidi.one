// Get references to the menu button and sidebar elements
const menuBtn = document.getElementById("menu-icon");
const sidebar = document.getElementById("sidebar");
const navbarLogo = document.querySelector("#navbar-logo img");

// Toggle the menu on click
menuBtn.addEventListener("click", (e) => {
  e.preventDefault();
  menuBtn.classList.toggle("close");
  sidebar.classList.toggle("-translate-y-full");
  navbarLogo.classList.toggle("sidebar-open");
});

// Get all the sidebar links, number spans, and the sidebar container
const sidebarLinks = document.querySelectorAll(".sidebar-link");
const sidebarContainer = document.getElementById("sidebar"); // Get the sidebar container

// Track the currently active link
let currentActiveLink = null; // Initialize as null

// Add event listeners to each link
sidebarLinks.forEach((link) => {
  link.addEventListener("mouseenter", () => {
    // Deactivate the current active link only if it's not the same as the hovered link
    if (currentActiveLink && currentActiveLink !== link) {
      currentActiveLink.classList.remove("active");
      const currentNumberSpan = currentActiveLink.querySelector(".number");
      currentNumberSpan.classList.remove("opacity-15");
      currentNumberSpan.classList.add("opacity-0");
    }

    // Activate the hovered link
    link.classList.add("active");
    const numberSpan = link.querySelector(".number");
    numberSpan.classList.remove("opacity-0");
    numberSpan.classList.add("opacity-15");

    // Update the current active link
    currentActiveLink = link;
  });
});

// Add an event listener to the sidebar container
sidebarContainer.addEventListener("mouseleave", () => {
  // Deactivate all links
  sidebarLinks.forEach((link) => {
    link.classList.remove("active");
    const numberSpan = link.querySelector(".number");
    numberSpan.classList.remove("opacity-15");
    numberSpan.classList.add("opacity-0");
  });

  // Find the "home" link and activate it
  const homeLink = document.querySelector('.sidebar-link[href="index.html"]');
  homeLink.classList.add("active");
  const homeNumberSpan = homeLink.querySelector(".number");
  homeNumberSpan.classList.remove("opacity-0");
  homeNumberSpan.classList.add("opacity-15");

  // Update the current active link
  currentActiveLink = homeLink;
});
