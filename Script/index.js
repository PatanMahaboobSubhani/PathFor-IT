//togle between two pages
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('toggleView');
  const label = document.getElementById('switchLabel');

  toggle.addEventListener('change', () => {
    if (toggle.checked) {
      label.textContent = 'Experienced Professionals';
      window.location.href = '/html/experienced.html';
    } else if (toggle.unchecked) {
      label.textContent = 'Non-IT to IT';
      window.location.href = 'index.html';
    }
  });
});
