// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  // document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Attach the click event to the button
mybutton.addEventListener("click", topFunction);


document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('themeToggle');

  themeToggle.addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  });
});
document.addEventListener('DOMContentLoaded', function() {
  const addToCartButtons = document.querySelectorAll('.add-to-cart');
  const cartItemsList = document.getElementById('cart-items');
  const totalAmount = document.getElementById('total');

  let cart = [];

  addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
      const serviceName = button.dataset.name;
      const serviceCost = parseInt(button.dataset.cost);

      const existingItem = cart.find(item => item.name === serviceName);

      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ name: serviceName, cost: serviceCost, quantity: 1 });
      }

      updateCart();
    });
  });

  function updateCart() {
    cartItemsList.innerHTML = '';
    let cartTotal = 0;

    cart.forEach(item => {
      const itemTotal = item.cost * item.quantity;
      cartTotal += itemTotal;

      const li = document.createElement('li');
      li.textContent = `${item.name} x${item.quantity} - $${itemTotal}`;
      cartItemsList.appendChild(li);
    });

    totalAmount.textContent = cartTotal;
  }
});

// JavaScript for showing person information on hover
document.addEventListener('DOMContentLoaded', function() {
  const persons = document.querySelectorAll('.person');

  persons.forEach(person => {
    person.addEventListener('mouseenter', () => {
      const name = person.getAttribute('data-name');
      const occupation = person.getAttribute('data-occupation');
      const tooltip = document.createElement('div');
      tooltip.classList.add('tooltip');
      tooltip.innerHTML = `<strong>Name:</strong> ${name}<br><strong>Occupation:</strong> ${occupation}`;
      person.appendChild(tooltip);
    });

    person.addEventListener('mouseleave', () => {
      const tooltip = person.querySelector('.tooltip');
      if (tooltip) {
        tooltip.remove();
      }
    });
  });
});
