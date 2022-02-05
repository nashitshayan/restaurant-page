import chefImgURL from './chef.svg';


export default function aboutUs(){
    
    //aboutUs div
    
    const aboutUsContent= document.createElement('div');
    aboutUsContent.id ='aboutUsContent';
    aboutUsContent.classList.add('tabContent');


    // chef img
    const imgDiv= document.createElement('div');
    const chefImg = new Image();
    chefImg.src= chefImgURL;
    chefImg.id= 'chefImg';
    imgDiv.appendChild(chefImg);
    
    //about Chef Div
    const aboutChef = document.createElement('div');
    aboutChef.id='aboutChef';
    aboutChef.textContent= 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste cumque veritatis maiores repellendus quod saepe nulla alias eius, inventore ullam. Quae, temporibus deleniti. Temporibus totam autem placeat perspiciatis! Fugit inventore numquam voluptatibus quos molestiae perferendis quis rerum accusantium totam consequuntur!';

    //add imgDiv and aboutChef div to aboutUsContent div
    aboutUsContent.append(imgDiv, aboutChef);

    return aboutUsContent;
}