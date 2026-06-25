import { animate, stagger, spring } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

// Animate navbar sliding down
animate(
  ".navbar",
  { opacity: [0, 1], y: [-20, 0] },
  { duration: 0.8, easing: "ease-out" }
);

// Animate hero elements with stagger
animate(
  ".stagger-item",
  { opacity: [0, 1], y: [20, 0] },
  {
    delay: stagger(0.15, { startDelay: 0.3 }),
    duration: 0.8,
    easing: [0.17, 0.55, 0.55, 1]
  }
);

// Add hover animation for the glass card
const card = document.querySelector(".glass-card");
if (card) {
  card.addEventListener("mouseenter", () => {
    animate(
      card, 
      { scale: 1.05, rotate: 2 }, 
      { type: "spring", stiffness: 300, damping: 20 }
    );
  });
  
  card.addEventListener("mouseleave", () => {
    animate(
      card, 
      { scale: 1, rotate: 0 }, 
      { type: "spring", stiffness: 300, damping: 20 }
    );
  });
}
