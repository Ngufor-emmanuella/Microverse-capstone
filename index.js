const ham = document.getElementById('ham');
const mobileNav = document.getElementById('hide');
ham.addEventListener('click', () => {
  mobileNav.style.left = '0';
  mobileNav.style.right = '0';
});

// This will listen for clicks on the X button
const closebtn = document.querySelector('.markx');
closebtn.addEventListener('click', () => {
  mobileNav.style.left = '-100vw';
  mobileNav.style.right = '100vw';
});
/* main program zone */
const data = [
  {
    image: 'fa-solid fa-masks-theater',
    heading: 'Healthy',
    paragraph: 'Appreciate various creations applying CC license of researchers, organised in the country.',
  },
  {
    image: 'fa-regular fa-head-side-mask',
    heading: 'Happy',
    paragraph: 'Appreciate various creations applying CC license of researchers, organised in the country.',
  },
  {
    image: 'fa-solid',
    heading: 'Healthy',
    paragraph: 'Appreciate various creations applying CC license of researchers, organised in the country.',
  },
  {
    image: 'fa-solid fa-masks-theater',
    heading: 'Happy',
    paragraph: 'Appreciate various creations applying CC license of researchers, organised in the country.',
  },
  {
    image: 'fa-solid',
    heading: 'Healthy',
    paragraph: 'Appreciate various creations applying CC license of researchers, organised in the country.',
  },
];
const mainProHead = document.querySelector('#procarthead');
mainProHead.innerHTML = 'Main Program';
function Cartdisplay() {
  for (let i = 0; i < data.length; i += 1) {
    const mainProContent = document.getElementById('cartContainer');
    const cart = document.createElement('div');
    cart.classList.add('box2a');
    const divImg = document.createElement('div');
    divImg.classList.add('box2a-img');
    const iconImg = document.createElement('i');
    iconImg.classList.add('fa-solid');
    iconImg.classList.add('fa-masks-theater');
    // iconImg.classList.add('fa-regular fa-head-side-mask');
    const cartHead = document.createElement('h2');
    cartHead.innerHTML = data[i].heading;
    const cartPara = document.createElement('p');
    cartPara.innerHTML = data[i].paragraph;
    /* Need to append all the element to it various parent */
    mainProContent.appendChild(cart);
    cart.appendChild(divImg);
    divImg.appendChild(iconImg);
    cart.appendChild(cartHead);
    cart.appendChild(cartPara);
  }
}

Cartdisplay(data);
const featureData = [
  {
    image: 'images/cucumber.jpg',
    head: 'Benefits of cucumbers',
    subHead: 'Research has proven that some fruits and veggies reduces blood sugar.',
    para: 'Come learn the benefits cucumers has in reducing blood sugar spikes... ',
  },
  {
    image: 'images/lowfat-milk.png',
    head: 'Benefits of milk',
    subHead: 'Research has proven that some fruits and veggies reduces blood sugar.',
    para: 'Teaching the best and different kinds of milk to reduce blood sugar spikes... ',
  },
  {
    image: 'images/tubers.jpg',
    head: 'Benefits of tubers',
    subHead: 'Research has proven that some fruits and veggies reduces blood sugar.',
    para: 'Demonstrating how to count portion sizes of foods to reduce blood sugar spikes... ',
  },
  {
    image: 'images/green-apples.webp',
    head: 'Benefits of apples',
    subHead: 'Research has proven that some fruits and veggies reduces blood sugar.',
    para: 'Listing the best fruits and veggies with low glycemic indexes...',
  },
  {
    image: 'images/salad.jpg',
    head: 'Benefits of veggies',
    subHead: 'Research has proven that some fruits and veggies reduces blood sugar.',
    para: 'Veggies being nutrient dense, we will talk about the best cooking methods...',
  },
  {
    image: 'images/oils.jpg',
    head: 'benefits of oils',
    subHead: 'Research has proven that some fruits and veggies reduces blood sugar.',
    para: 'Teaching you the top best oil to consume, and how it should be consumed... ',
  },
];
function featureDisplay() {
  const featureMain = document.querySelector('.box3a');
  for (let i = 0; i < featureData.length; i++) {
    const cardContent = document.createElement('div');
    cardContent.classList.add('box3b');
    const imgfeature = document.createElement('img');
    imgfeature.classList.add('image');
    imgfeature.setAttribute('src', featureData[i].image);
    imgfeature.setAttribute('alt', 'picture of foods');
    const card = document.createElement('div');
    card.classList.add('card');
    const cardHead = document.createElement('h2');
    cardHead.innerHTML = featureData[i].head;
    const cardSubHead = document.createElement('h6');
    cardSubHead.innerHTML = featureData[i].subHead;
    const cardHr = document.createElement('hr');
    cardHr.classList.add('thirdline');
    const paraCard = document.createElement('p');
    paraCard.innerHTML = featureData[i].para;
    // appending all the elemets
    featureMain.appendChild(cardContent);
    cardContent.appendChild(imgfeature);
    cardContent.appendChild(card);
    card.appendChild(cardHead);
    card.appendChild(cardSubHead);
    card.appendChild(cardHr);
    card.appendChild(paraCard);
  }
}
featureDisplay(featureData);

const selectChoice = document.querySelector('.see');
const myWork = [{
  list: 'See More',
},
];
const content = `
<ul class="see-one">
                <li>${myWork[0].list}</li>                                    
                <li><i class="fa-solid fa-angle-down"></i></li>
            </ul>
`;
selectChoice.innerHTML = content;

const menuDrop = document.querySelector('.box3b')

selectChoice.addEventListener('click', ()=> {
  menuDrop.style.display = 'block'
})
