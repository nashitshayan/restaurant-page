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
    aboutChef.innerHTML= `
        <div>
            <h2>Our Story</h2>
            <p>Based locally in City, we serve fresh home-cooked halal food.  Special care is taken to make sure all ingredients are fresh.</p>

        </div>
        
        <div>
            <h2>Our Vision</h2>
            <p>We believe in spreading warmth and happiness through our services. Currently we're a small business run by a family, but we work hard and wish to expand our business to serve more people.</p>
        </div>
    `

    //add imgDiv and aboutChef div to aboutUsContent div
    aboutUsContent.append(imgDiv, aboutChef);

  return aboutUsContent;
}