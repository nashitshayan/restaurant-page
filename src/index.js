import './styles.css'

import aboutUs from './aboutUs';
import menu from './menu'
import contact from './contact';


const contentDiv= document.createElement('div');
contentDiv.id='content';
document.body.appendChild(contentDiv);

//header
const header= document.createElement('header');
header.id= 'header';
header.textContent = 'Abbu Non-Veg';


//nav tabs 
const nav= document.createElement('nav');
nav.id= 'tabs';
nav.classList.add('centerContainer')

// const ul= document.createElement('ul');
// const li1 = document.createElement('li');
// const li2 = document.createElement('li');
// const li3 = document.createElement('li');
// li1.textContent='About Us';
// li2.textContent='Menu';
// li3.textContent='Contact';

// ul.append(li1,li2,li3);
// nav.appendChild(ul);

nav.innerHTML= `<ul> 
                    <li id='about' class='tabItem active'>About Us</li>
                    <li id='menu' class='tabItem'>Menu</li>
                    <li id='contact' class='tabItem'>Contact</li>
                </ul>`

 //header.appendChild(nav)

//main div

const main = document.createElement('main');
main.id='main';
main.classList.add('centerContainer');


//default is about us page
main.append(aboutUs());

//tabbing functionality;

nav.addEventListener('click', (e)=>{
    console.log()
    //remove active class from each menu item, later add only that which is clicked
    let tabItemArr= Array.from(e.target.parentElement.children);
    tabItemArr.forEach(menuItem=> menuItem.classList.remove('active'));
    // e.target.parentElement.children.forEach(menuItem=> menuItem.classList.remove('active'));

    

    if(e.target.id==='about')
        {   
            e.target.classList.add('active');
            main.innerHTML='';
            main.append(aboutUs())
        }
    else if(e.target.id==='menu')
        {   
            e.target.classList.add('active');
            main.innerHTML='';
            main.append(menu());
        }
    else if(e.target.id==='contact')
        {   
            e.target.classList.add('active');
            main.innerHTML='';
            main.append(contact());
        }
})


// 


//footer
const footer= document.createElement('footer');
footer.id='footer';
footer.innerHTML= `Made by <a href="https://github.com/nashitshayan" target="_blank">Nashit Shayan Khan</a>. Click <a href="https://github.com/nashitshayan/restaurant-page" target="_blank">here</a> to see the code.`


contentDiv.append(header,nav, main,footer);
