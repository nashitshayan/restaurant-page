import './styles.css'
import chefImgURL from './chef.svg';


//add img to the div#chefImg in the aboutUsContent div
const aboutUsContent= document.getElementById('aboutUsContent');
const chefImg = new Image();
chefImg.src= chefImgURL;
chefImg.id= 'chefImg';
aboutUsContent.insertBefore(chefImg, aboutUsContent.firstChild)


