const body = document.querySelector('body');
const menuBars = document.getElementById('menu-bars');
const overlay = document.getElementById('overlay');
const nav1 = document.getElementById('nav-1');
const nav2 = document.getElementById('nav-2');
const nav3 = document.getElementById('nav-3');
const navItems = [nav1, nav2, nav3];

function toggleNav() {
  menuBars.classList.toggle('change');
  overlay.classList.toggle('overlay-active');
  if (overlay.classList.contains('overlay-active')) {
    overlay.classList.replace('overlay-slide-left', 'overlay-slide-right');
  } else {
    overlay.classList.replace('overlay-slide-right', 'overlay-slide-left');
  }
  body.classList.toggle('overflow');
}

menuBars.addEventListener('click', toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener('click', toggleNav);
});

const speakerCardsItems = [
  {
    speaker_image: 'images/cucumber.jpg',
    speaker_name: 'Benefits of cucumbers',
    speaker_education: 'Research has proven that some fruits and veggies reduces blood sugar',
    speaker_bio: 'Come learn the benefits cucumers has in reducing blood sugar spikes... ',
  },
  {
    speaker_image: 'images/lowfat-milk.png',
    speaker_name: 'Benefits of milk',
    speaker_education: 'Research has proven that some fruits and veggies reduces blood sugar',
    speaker_bio: 'Teaching the best and different kinds of milk to reduce blood sugar spikes... ',
  },
  {
    speaker_image: 'images/tubers.jpg',
    speaker_name: 'Benefits of tubers',
    speaker_education: 'Research has proven that some fruits and veggies reduces blood sugar',
    speaker_bio: 'Demonstrating how to count portion sizes of foods to reduce blood sugar spikes... ',
  },
  {
    speaker_image: 'images/green-apples.webp',
    speaker_name:  'Benefits of apples',
    speaker_education: 'Research has proven that some fruits and veggies reduces blood sugar',
    speaker_bio: 'Listing the best fruits and veggies with low glycemic indexes...',
  },
  {
    speaker_image: 'images/salad.jpg',
    speaker_name: 'Benefits of veggies',
    speaker_education: 'Research has proven that some fruits and veggies reduces blood sugar',
    speaker_bio: 'Veggies being nutrient dense, we will talk about the best cooking methods...',
  },
  {
    speaker_image: 'images/oils.jpg',
    speaker_name: 'benefits of oils',
    speaker_education: 'Research has proven that some fruits and veggies reduces blood sugar.',
    speaker_bio: 'Teaching you the top best oil to consume, and how it should be consumed... ',
  },
];

speakerCardsItems.forEach((Element, index) => {
  const speakerCard = document.querySelector('.featured_speakers_main_div');
  const cardSection = document.createElement('div');
  cardSection.classList = 'cardSection';
  const speakerCardHTML = `

  <div class="speaker_div">
    <div class="speaker_image_container">
      <img class="speaker_image" src="${speakerCardsItems[index].speaker_image}" alt="">
    </div>
    <div class="speaker_text_container">
      <h3 class="speaker_name"> ${speakerCardsItems[index].speaker_name}</h3>
      <p class="speaker_education_background">
      ${speakerCardsItems[index].speaker_education}
      </p>
      <div class="divider_line"></div>
      <p class="speaker_education_bio">
      ${speakerCardsItems[index].speaker_bio}
      </p>
    </div>
  </div>
  
`;

  cardSection.innerHTML += speakerCardHTML;
  speakerCard.appendChild(cardSection);
});
