import './styles.css'

import aboutUs from './aboutUs';
aboutUs();

const contentDiv= document.getElementById('content')

//header
const header= document.createElement('header');
header.id= 'header';
header.textContent = 'Abbu Non-Veg';


//nav tabs 
const nav= document.createElement('nav');
nav.id= 'tabs';
nav.classList.add('centerContainer')
const ul= document.createElement('ul');
const li1 = document.createElement('li');
const li2 = document.createElement('li');
const li3 = document.createElement('li');
li1.textContent='About Us';
li2.textContent='Menu';
li3.textContent='Contact';

ul.append(li1,li2,li3);
nav.appendChild(ul);
// header.appendChild(nav)

//main div

const main = document.createElement('main');
main.id='main';
main.classList.add('centerContainer');

//add aboutUs to main

main.append(aboutUs())


contentDiv.append(header, nav, main);
