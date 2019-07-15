console.log('test 1:29');
window.addEventListener('scroll', function(event) {
  let logo = document.getElementById('logo');
  let button = document.getElementById('button');
  let nav = document.getElementById('nav');
  let lines = this.document.getElementsByClassName('lines');
  if (window.scrollY > button.offsetTop + button.offsetHeight) {
    logo.src = '../../assets/logo-color.svg';
    nav.style.backgroundColor = 'rgba(255, 255, 255, 1)';
    lines[0].style.backgroundColor = 'rgb(137,1,89)';
    lines[1].style.backgroundColor = 'rgb(85,99,90)';
    lines[2].style.backgroundColor = 'rgb(137,1,89)';
  } else {
    logo.src = '../../assets/logo-white.svg';
    nav.style.backgroundColor = 'transparent';
    lines[0].style.backgroundColor = 'white';
    lines[1].style.backgroundColor = 'white';
    lines[2].style.backgroundColor = 'white';
  }
});

let navMenu = document.getElementById('nav__menu');
navMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

let user = [
  {
    name: 'John Doe',
    review:
      'Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. ',
    date: '08/08/2019'
  },
  {
    name: 'Jane Doe',
    review:
      'Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula. Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.',
    date: '04/22/2019'
  },
  {
    name: 'Pareen Patel',
    review:
      'Lorem ipsum dolor sit amet, et felis integer. Cras ac, duis nisl magna est sociis, neque in odio vel, sit lobortis erat. Fugit quam, ut pede ut ante, in viverra eros dictum nisl ligula.',
    date: '11/08/2018'
  }
];

let start = 0;
let changeReviews = () => {
  document.getElementById('name').innerHTML = `${user[start].name} ${
    user[start].date
  }`;
  document.getElementById('review').innerHTML = user[start].review;

  if (start < user.length - 1) {
    start++;
  } else {
    start = 0;
  }

  setTimeout('changeReviews()', 3000);
};

changeReviews();
