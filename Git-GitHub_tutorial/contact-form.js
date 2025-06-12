const form = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  // Clear the form
  form.reset();
});
