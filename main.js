const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');

left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));

right.addEventListener('mouseenter', () => container.classList.add('hover-right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover-right'));


/* ao clicar no botão, o width (ou height) volta a 50% */
/*
const buttons = document.querySelectorAll('.btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    if (container.classList.contains('hover-left')) container.classList.remove('hover-left');
    if (container.classList.contains('hover-right')) container.classList.remove('hover-right');
  });
});*/