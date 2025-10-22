const sidebar = document.querySelector('.sidebar');
const menuBtn = document.querySelector('.header button');
const cards = document.querySelectorAll('.cards .card');
const menuItems = document.querySelectorAll('.sidebar .menu li');

let activeIndex = 0; // track which menu item is active

// Function to set active menu item
function setActiveMenu(index) {
  menuItems.forEach((item, i) => {
    if (i === index) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

// Initial active menu
setActiveMenu(activeIndex);

// Toggle sidebar on menu button click
menuBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  // maintain active menu style on mobile
  setActiveMenu(activeIndex);
});

// Update active menu on click
menuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    activeIndex = index;
    setActiveMenu(activeIndex);
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('active');
    }
  });
});

// Close sidebar on card click (mobile only)
cards.forEach(card => {
  card.addEventListener('click', () => {
    if (window.innerWidth <= 768) {
      sidebar.classList.remove('active');
    }
  });
});