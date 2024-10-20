'use strict';

// Toggle theme
const buttons = document.querySelectorAll('.btn-group button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const theme = button.getAttribute('data-bs-theme-value');
    document.documentElement.setAttribute('data-bs-theme', theme);
  });
});

// Popover
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);
