const points = document.querySelectorAll('.points');

points.forEach(point => {
  point.addEventListener('click', () => {
    const jobInfo = point.dataset.info;
    alert(`Job information: ${jobInfo}`);
  });
});
