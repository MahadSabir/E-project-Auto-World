  // Fallback: hide loader after 5 seconds
  
  const fallback = setTimeout(() => hideLoader(), 5000);
  
  window.addEventListener("load", () => {
    clearTimeout(fallback); // Page loaded in time
    hideLoader();
  });

  function hideLoader() {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.transition = "opacity 1s ease";
      loader.style.opacity = 0;
      setTimeout(() => loader.style.display = "none", 1000);
    }
  }

  // Show loader on any link click
  document.querySelectorAll("a[href]").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const loader = document.getElementById("loader");
      loader.style.display = "flex";
      loader.style.opacity = 1;
      setTimeout(() => {
        window.location.href = this.href;
      }, 300);
    });
  });