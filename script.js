const loginForm = document.getElementById('loginForm');
const userInfo = document.getElementById('userInfo');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  try {
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const result = await response.json();

    if (result.success) {
      document.getElementById('name').textContent = result.user.name;
      document.getElementById('email').textContent = result.user.email;
      document.getElementById('role').textContent = result.user.role;

      loginForm.style.display = 'none';
      userInfo.style.display = 'block';
    } else {
      alert(result.message);
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
});
