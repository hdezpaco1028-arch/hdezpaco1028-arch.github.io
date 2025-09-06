// Basic interactions: nav toggle, product modal, contact submit
document.addEventListener('DOMContentLoaded', () => {
  // small helper to query
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));

  // Year
  $('#year').textContent = new Date().getFullYear();

  // nav toggle for small screens
  const navToggle = $('#navToggle');
  const mainNav = $('#mainNav');
  navToggle?.addEventListener('click', () => {
    const open = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!open));
    if (!open) mainNav.style.display = 'block';
    else mainNav.style.display = '';
  });

  // Product data (easy to extend or fetch dynamically)
  const products = {
    1: {
      id:1,
      title:'Wireless Headphones',
      price:'$49.99',
      desc:'Noise-cancelling, up to 30h battery.',
      img: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder'
    },
    2: {
      id:2,
      title:'Clip Light',
      price:'$12.99',
      desc:'USB-C rechargeable, 3 brightness modes.',
      img: 'https://images.unsplash.com/photo-1526178614993-6c9b9f16d2f1?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder'
    },
    3: {
      id:3,
      title:'Pocket Speaker',
      price:'$29.99',
      desc:'Compact IPX5 Bluetooth speaker.',
      img: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder'
    }
  };

  // Modal
  const modal = $('#productModal');
  const modalTitle = $('#modalTitle');
  const modalPrice = $('#modalPrice');
  const modalDesc = $('#modalDesc');
  const modalImage = $('#modalImage');
  const modalClose = $('#modalClose');

  function openModal(product){
    modalTitle.textContent = product.title;
    modalPrice.textContent = product.price;
    modalDesc.textContent = product.desc;
    modalImage.src = product.img;
    modalImage.alt = product.title;
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow = 'hidden';
  }
  function closeModal(){
    modal.setAttribute('aria-hidden','true');
    document.body.style.overflow = '';
  }

  // Attach click handlers to cards
  $$('.card').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      if (products[id]) openModal(products[id]);
    });
    // keyboard accessibility
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  modalClose?.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') closeModal();
  });

  // Contact form basic handler (no backend) — show an alert and clear
  const contactForm = $('#contactForm');
  contactForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = new FormData(contactForm);
    // In a real site, you'd POST to your backend or a form service.
    alert(`Thanks, ${form.get('name')}! Message sent (demo).`);
    contactForm.reset();
  });
});
