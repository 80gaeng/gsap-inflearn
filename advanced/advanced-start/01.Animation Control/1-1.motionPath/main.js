const $ = (node) => document.querySelector(node);

/* function $(node) {
  return document.querySelector(node);
}
 */

const tiger = $('#tiger');
const button = $('#button');
const time = $('#time');
const progress = $('#progressSlider');

const animation = gsap.to(tiger, {
  duration: 6,
  motionPath: {
    path: '#route',
    align: tiger,
  },
  onUpdate: update,
  onComplete: () => {
    button.textContent = 'play';
  },
});

function update() {
  time.textContent = animation.progress().toFixed(2);
  progress.value = animation.progress();
}

progress.addEventListener('input', (e) => {
  const target = e.currentTarget;
  button.textContent = 'play';

  animation.progress(target.value).pause();
});

function seetButtonState() {
  button.textContent = animation.paused() ? 'play' : 'pause';
}

button.addEventListener('click', () => {
  animation.paused(!animation.paused());

  if (animation.progress() === 1) {
    animation.restart();
  }

  seetButtonState();
});

const home = $('#home');
const mountain = $('#mountain');
const river = $('#river');
const company = $('#company');
const svg = $('svg');

river.addEventListener('click', () => {
  gsap.to(animation, { progress: 0.47, duration: 3 });
});

svg.addEventListener('click', (e) => {
  const target = e.target.closest('g');

  if (!target) return;

  const id = target.getAttribute('id');
  if (!id) return;

  if (id === 'svg') return;

  let progress = 0;
  animation.pause();

  switch (id) {
    case 'home':
      progress = 0;
      break;
    case 'mountain':
      progress = 0.25;
      break;

    case 'river':
      progress = 0.47;
      break;

    case 'company':
      progress = 1;
      break;
  }

  gsap.to(animation, { progress: progress, duration: 1 });
  seetButtonState();
});
