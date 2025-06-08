  const bird = document.getElementById('bird');

bird.addEventListener('click', () => {
  bird.classList.add('fly');
  setTimeout(() => {
  window.location.replace("index.html")
  }, 2000);
});
