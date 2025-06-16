
document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver(() => {
    const toggle = document.getElementById("darkToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
        toggle.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
        localStorage.setItem("theme", isDark ? "dark" : "light");
      });

      // Apply saved theme
      if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark");
        toggle.textContent = "☀️ Light Mode";
      }

      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
