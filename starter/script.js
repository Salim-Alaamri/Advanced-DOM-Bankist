'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const learnMore = document.querySelector('.btn--scroll-to');
const features = document.querySelector('#nav__features');
const operation = document.querySelector('#nav__operations');
const testimonials = document.querySelector('#nav__testimonials');
const section1 = document.querySelector('#section--1');
const section2 = document.querySelector('#section--2');
const section3 = document.querySelector('#section--3');
const nav = document.querySelector('.nav');
///
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

//My way to scrol to a section
const scrolTo = el => {
  el.scrollIntoView({ behavior: 'smooth' });
};

learnMore.addEventListener('click', () => scrolTo(section1));
// features.addEventListener('click', () => scrolTo(section1));
// operation.addEventListener('click', () => scrolTo(section2));
// testimonials.addEventListener('click', () => scrolTo(section3));

//Event delegation and its more effecient for large apps and more effecient
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tapped Component

tabsContainer.addEventListener('click', e => {
  const clicked = e.target.closest('.operations__tab');

  // console.log(clicked);
  //Guard clause
  if (!clicked) return;
  //remove active class from other tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  //active content area
  tabsContent.forEach(content =>
    content.classList.remove('operations__content--active')
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};
//Passing an arguments into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Sticky navigation
// const initialCoords = section1.getBoundingClientRect();
// // console.log(initialCoords);
// window.addEventListener('scroll', () => {
//   // console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

//A better way : The Intersection Observer API
// const obsCallbback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };
// const obsOptions = {
//   root: null,
//   trashold: [0, 0.2],
// };
// const observer = new IntersectionObserver(obsCallbback, obsOptions);
// observer.observe(section1);



///////////////////////////////////////////
///////////////////////////////////////////
//TODO/////////Practices///////////////////
///////////////////////////////////////////
///////////////////////////////////////////

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
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', () => alert('Mouse Hover is working'));

// Generate random color

const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1));
const randomColor = `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(
  0,
  255
)})`;
// console.log(randomColor);

//DOM traversing
const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);

h1.firstElementChild.style.color = h1.lastElementChild.style.color = 'white';
