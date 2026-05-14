gsap.to('.stage', { autoAlpha: 1 });

const split = new SplitText('h1', { type: 'chars' });

const tl = gsap.timeline();

tl.from(split.chars, {
  y: gsap.utils.wrap([-100, 100]),
  opacity: 0,
  stagger: {
    each: 0.02,
    from: 'random',
  },
}).to(split.chars, {
  x: 10,
  y: gsap.utils.wrap([0, 200, 0, 200, 200, 0]),
  color: gsap.utils.wrap(['red', 'blue']),
  stagger: {
    each: 0.02,
  },
});

GSDevTools.create();
