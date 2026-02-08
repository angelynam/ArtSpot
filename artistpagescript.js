document.addEventListener('DOMContentLoaded', () => {
    // --- Tab Switching Logic ---
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('[data-tab-content]');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = document.querySelector(tab.dataset.tabTarget);

            // 1. Remove "active" class from all tabs and content
            tabContents.forEach(content => content.classList.remove('active'));
            tabs.forEach(t => t.classList.remove('active'));

            // 2. Add "active" class to the clicked tab and its content
            tab.classList.add('active');
            target.classList.add('active');
        });
    });

    // --- Search Bar Logic ---
    const searchInput = document.querySelector('.search-container input');
    
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.toLowerCase();
            console.log("Searching for:", query);
            // Here you could add logic to filter the portfolio-grid items
            filterGallery(query);
        }
    });

    // --- Simple Gallery Filter Example ---
    function filterGallery(query) {
        const items = document.querySelectorAll('.grid-item');
        items.forEach(item => {
            const altText = item.querySelector('img').alt.toLowerCase();
            if (altText.includes(query) || query === "") {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // --- Header Scroll Effect ---
    const header = document.querySelector('.main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.15)';
        } else {
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    });
});