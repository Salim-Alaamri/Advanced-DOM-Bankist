'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('header');
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//implement button scroll to (Learn more)

const learnMore = document.querySelector('.btn--scroll-to');
const features = document.querySelector('#nav__features');
const operation = document.querySelector('#nav__operations');
const testimonials = document.querySelector('#nav__testimonials');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');

const scrolTo = el => {
  el.scrollIntoView({ behavior: 'smooth' });
};

learnMore.addEventListener('click', () => scrolTo(section1));
features.addEventListener('click', () => scrolTo(section1));
operation.addEventListener('click', () => scrolTo(section2));
testimonials.addEventListener('click', () => scrolTo(section3));

//todo: Practices
//addelement to the dom
const message = document.createElement('div');

message.classList.add('cookie-message');
message.textContent = 'We use cookied for improved functionality.';
message.innerHTML = `We use cookied for improved functionality.     <button class="btn btn--close-cookie">Got it!</button>`;
header.append(message);

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});

//styles
message.style.backgroundColor = '#37383d';
message.style.width = '100%';
message.style.borderRadius = '5px';
// console.log(getComputedStyle(message).height);

message.style.height =
  parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';
// console.log(getComputedStyle(message).height);

//Attributes
const logo = document.getElementById('logo');
// console.log(logo.src);

//Hover by a mouse / handle the events
const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', () => alert('Mouse Hover is working'));

// Generate random color

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1));
const randomColor = `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(
  0,
  255
)})`;
// console.log(randomColor);
