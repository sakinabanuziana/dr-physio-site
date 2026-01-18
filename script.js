document.addEventListener('DOMContentLoaded', () => {
  // Dynamic year
  document.getElementById('year').textContent = new Date().getFullYear();

  // Nav toggle for small screens
  const navToggle = document.getElementById('nav-toggle');
  const navList = document.getElementById('nav-list');
  if (navToggle) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      if (!open) navList.style.display = 'flex'; else navList.style.display = '';
    });
  }

  // Simple cart handling
  const cart = [];
  const cartCount = document.getElementById('cart-count');
  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const card = e.currentTarget.closest('.product-card');
      const title = card ? card.querySelector('h3').textContent.trim() : 'Item';
      cart.push(title);
      cartCount.textContent = cart.length;
      showFormStatus(`Added \