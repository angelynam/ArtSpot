/* Select all tab buttons and all content sections */
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget);

    /* 1. Reset all content sections (hide them) */
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active');
    });

    /* 2. Reset all tab titles (turn them black) */
    tabs.forEach(t => {
      t.classList.remove('active');
    });

    /* 3. Highlight the clicked tab (turn it pink) */
    tab.classList.add('active');

    /* 4. Show the correct content */
    target.classList.add('active');
  });
});