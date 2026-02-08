const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.tabTarget);

        // Hide all content
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Deactivate all tab buttons
        tabs.forEach(t => t.classList.remove('active'));

        // Activate current
        tab.classList.add('active');
        target.classList.add('active');
    });
});