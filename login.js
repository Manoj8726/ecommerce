function login() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  if(username && password) {
    window.location.href = 'products.html';
  }
  return false;
}
