const tl = gsap.timeline({
  defaults: {
    duration: 2,
  },
});

tl.from('.orange', { opacity: 0, y: 50 })
  .from('.pink', { opacity: 0, y: -50 })
  .from('.blue', { opacity: 0, scale: 1.2 })
  .from('.green', { opacity: 0, immediateRender: false });

GSDevTools.create();
