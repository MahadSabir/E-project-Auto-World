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


  // Search bar

  document.addEventListener('DOMContentLoaded', () => {
    const brands = [
      { name: 'Porsche', url: 'porsche.html' },
      { name: 'BMW', url: 'bmw.html' },
      { name: 'Audi', url: 'audi.html' }
    ];
  
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
  
    function searchBrands() {
      const term = searchInput.value.trim().toLowerCase();
      searchResults.innerHTML = '';
  
      if (!term) {
        searchResults.style.display = 'none';
        return;
      }
  
      const matches = brands.filter(b => b.name.toLowerCase().includes(term));
  
      if (matches.length > 0) {
        matches.forEach(brand => {
          const li = document.createElement('li');
          li.innerHTML = `<a href="${brand.url}">${brand.name}</a>`;
          searchResults.appendChild(li);
        });
        searchResults.style.display = 'block';
      } else {
        searchResults.style.display = 'none';
      }
    }
  
    function handleKey(event) {
      if (event.key === 'Enter') {
        event.preventDefault();
        const term = searchInput.value.trim().toLowerCase();
        const match = brands.find(b => b.name.toLowerCase().includes(term));
        if (match) {
          window.location.href = match.url;
        }
      }
    }
  
    searchInput.addEventListener('input', searchBrands);
    searchInput.addEventListener('keydown', handleKey);
  
    document.addEventListener('click', e => {
      if (!searchInput.contains(e.target) && !searchResults.contains(e.target)) {
        searchResults.style.display = 'none';
      }
    });
  });