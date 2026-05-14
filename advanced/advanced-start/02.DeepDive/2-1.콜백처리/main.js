const $ = (node) => document.querySelector(node);

//  callback -> 나중에 일어나는 일

// onComplete
// onUpdate
// onStart
// onRepeat

const h1 = $('h1');

const tl = gsap.timeline();

gsap.to('.orange', {
  duration: 2.5,
  y: 100,
  // repeat: 5,
  onComplete: complete,
  onCompleteParams: ['오렌지'],
  onUpdate() {
    h1.textContent = `애니메이션 재생 중`;
  },
  onStart() {
    console.log('시작');
  },
  onRepeat() {
    console.log('반복');
  },
});

function complete(color) {
  // console.log(color);
  h1.textContent = `${color} 애니메이션 재생 끝`;

  gsap.to(this.targets()[0], { rotation: 360 });
}
