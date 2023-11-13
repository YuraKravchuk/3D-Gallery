const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const box = document.querySelector('.box');

let step = 0;

prev.addEventListener('click', function () {
  step += 45;
  box.style = `transform: perspective(1000px) rotateY(${step}deg)`;
});

next.addEventListener('click', function () {
  step -= 45;
  box.style = `transform: perspective(1000px) rotateY(${step}deg)`;
});
