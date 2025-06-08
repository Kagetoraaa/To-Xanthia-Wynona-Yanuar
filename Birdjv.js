  const bird = document.getElementById('bird');

bird.addEventListener('click', () => {
  bird.classList.add('fly');
  setTimeout(() => {
  window.location.replace("ngesurat.html")
  }, 2000);
});
