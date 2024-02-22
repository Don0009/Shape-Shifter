 const shape = document.querySelectorAll('.shape');

const diff = document.querySelector('.diff');

shape.forEach(function (shapes) {
  shapes.addEventListener('click', function (e) {
    if (e.target.id == 'square') {
      diff.style.width = '200px';
      diff.style.height = '200px';
    }
  });
});
