/**
 * Utility function to track elements in the viewport with a delay (one-time observation)
 * @param {NodeList | HTMLElement[]} elements - List of elements to observe
 * @param {Function} callback - Function to call when an element is considered "seen"
 * @param {number} delay - Time in milliseconds an element must stay in the viewport to be considered "seen"
 */
function observeInViewportOnce(elements, delay = 1000) {
  if (!("IntersectionObserver" in window)) {
    console.warn("IntersectionObserver is not supported in this browser.");
    return;
  }

  const visibilityTimers = new Map(); // Track timers for elements

  const observer = new IntersectionObserver((entries, observerInstance) => {
    entries.forEach((entry) => {
      const element = entry.target;

      if (entry.isIntersecting) {
        // Start a timer when the element enters the viewport
        if (!visibilityTimers.has(element)) {
          const timer = setTimeout(() => {
            // callback(element, true); // Call the callback
            console.log(
              `Element stayed in viewport for delay (one-time):`,
              element
            );
            observerInstance.unobserve(element); // Stop observing this element
            visibilityTimers.delete(element); // Clean up the timer reference
          }, delay);
          visibilityTimers.set(element, timer);
        }
      } else {
        // Clear the timer if the element leaves the viewport before the delay
        if (visibilityTimers.has(element)) {
          clearTimeout(visibilityTimers.get(element));
          visibilityTimers.delete(element);
        }
      }
    });
  });

  elements.forEach((element) => observer.observe(element));
}

// Example usage:
document.addEventListener("DOMContentLoaded", () => {
  const gridItems = document.querySelectorAll(".grid-item"); // Adjust class as needed

  observeInViewportOnce(gridItems, 1000); // 1-second delay
});

document.querySelector(".grid").addEventListener("click", (e) => {
  const targetItem = e.target.closest(".grid-item");
  console.log("target ele", targetItem);
});
