const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
  const header = card.querySelector('.project-header');
  const details = card.querySelector('.project-details');
  header.addEventListener('click', () => {
    details.classList.toggle('show');
  });
});
