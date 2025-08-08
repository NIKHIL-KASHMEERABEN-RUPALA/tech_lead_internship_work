function register() {
  alert("You have clicked Register. Redirecting to registration page...");
}

function toggleTheme() {
  const body = document.body;
  if (body.style.background.includes('black')) {
    body.style.background = 'linear-gradient(to right, #f5f5f5, #dddddd)';
  } else {
    body.style.background = 'linear-gradient(to right, #2e003e, #000000)';
  }
}
