gsap.set('.box', { transformPerspective: 600 });

gsap.to('.box', {
  rotateY: 360,
  duration: 8,
  ease: 'none',
  transformOrigin: '50% 50% 400px',
});

GSDevTools.create();
