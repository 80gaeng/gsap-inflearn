const $ = (node) => document.querySelector(node);

// const boxes = document.querySelectorAll('.box');
const boxes = gsap.utils.toArray('.box');

boxes.forEach((item) => {
  item.addEventListener('click', (e) => {
    gsap.to(e.currentTarget, { backgroundColor: 'gray', width: '300px' });
  });
});

$('#reset').addEventListener('click', () => {
  gsap.set('.box', { clearProps: 'all' });
});
