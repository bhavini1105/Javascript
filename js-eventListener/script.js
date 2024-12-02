/*
EventListener
The addEventListener method in JavaScript is used to attach an event handler to an element without overwriting existing event handlers.
The event handler function to run when the event occurs.
*/

// let clk = document.querySelector('.click');

// clk.addEventListener('click',()=>{
//     console.log("Button Clicked");

// })

// clk.addEventListener('dblclick', ()=> {
//     clk.style.backgroundColor = 'red';
// })

/*
When you click the button, it will display an alert, but no default action (like form submission) will occur because false is returned.
If you want myfun() to allow the default behavior, ensure it explicitly returns true.
*/

// function myfun(){
//     console.log("Clicked");
// }

// let txt = document.getElementById('txt');

// txt.addEventListener('mouseover',()=> {
//   txt.style.color = 'green';
//   txt.style.fontSize = '19px';
// });

// let text = document.getElementById('text');


// let img = [
//   {
//     id: 'card 1',
//     src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
//   },
//   {
//     id: 'card 2',
//     src: 'https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
//   },
//   {
//     id: 'card 3',
//     src: 'https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
//     text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
//   }
// ];

// let slideContainer = document.getElementById('main-container');
// let nextBtn = document.getElementById('nextbtn');
// let preBtn = document.getElementById('prevbtn');
// let ct = 0;

// // Create slides
// img.forEach((item) => {
//   let div = document.createElement('div');
//   div.classList.add('slider', 'hidden');

//   let imgSlider = document.createElement('img');
//   imgSlider.src = item.src;
//   imgSlider.alt = item.id;

//   let p = document.createElement('p');
//   p.textContent = item.text;

//   div.appendChild(imgSlider);
//   div.appendChild(p);
//   slideContainer.appendChild(div);
// });

// // Query slides after they are created
// let cards = document.querySelectorAll('.slider');
// cards[0].classList.add('visible'); // Show the first slide

// nextBtn.addEventListener('click', () => {
//   cards[ct].classList.remove('visible'); // Hide the current slide
//   ct++;
//   if (ct === cards.length) {
//     ct = 0; // Reset to the first slide
//   }
//   cards[ct].classList.add('visible'); // Show the next slide
// });

// preBtn.addEventListener('click', () => {
//   cards[ct].classList.remove('visible'); // Hide the current slide
//   ct--;
//   if (ct < 0) {
//     ct = cards.length - 1; // Reset to the last slide
//   }
//   cards[ct].classList.add('visible'); // Show the previous slide
// });

// Get the DOM elements

let img = [
  {
    id: 'card 1',
    src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    id: 'card 2',
    src: 'https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    id: 'card 3',
    src: 'https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    id: 'card 4',
    src: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    id: 'card 5',
    src: 'https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  },
  {
    id: 'card 6',
    src: 'https://plus.unsplash.com/premium_photo-1719943510748-4b4354fbcf56?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
  }
];

const slideContainer = document.getElementById('main-container');
const nextBtn = document.getElementById('nextbtn');
const prevBtn = document.getElementById('prevbtn');

let currentIndex = 0;

img.forEach((item) => {
  const div = document.createElement('div');
  div.classList.add('slider', 'hidden');

  const imgElement = document.createElement('img');
  imgElement.src = item.src;
  imgElement.alt = item.id;

  const p = document.createElement('p');
  p.textContent = item.text;

  div.appendChild(imgElement);
  div.appendChild(p);
  slideContainer.appendChild(div);
});

const cards = document.querySelectorAll('.slider');
for(let i=index ;i <= index + 2 ; i++){
    cards[i].classList.add('visible');
}

function showSlides(index) {
  cards.forEach((card) => card.classList.add('hidden'));
  for (let i = index; i < index + 3 && i < cards.length; i++) {
    cards[i].classList.remove('hidden');
  }
}

nextBtn.addEventListener('click', () => {
  currentIndex += 3;
  if (currentIndex >= cards.length) {

    currentIndex = 0;
  }
  showSlides(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex -= 3;
  if (currentIndex < 0) currentIndex = Math.max(0, cards.length - 3);
  showSlides(currentIndex);
});

showSlides(currentIndex);
