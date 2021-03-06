import biryaniImgURL from '../images/chickenBiryani.jpg';
import chickenTikkaURL from '../images/chickenTikka.jpeg';
import butterChickenURL from '../images/butterChicken.jpeg';
import fishFryURL from '../images/fishFry.jpeg';
import fishCurryURL from '../images/fishCurry.jpeg';
import eggCurryURL from '../images/eggCurry.jpg';


export default function menu(){
    const menuDiv= document.createElement('div');
    menuDiv.id='menuDiv';

    const menutItemList = [
        {
            name: 'Chicken Biryani',
            price: '150 Rs.',
            url: biryaniImgURL,
        },
        {
            name: 'Chicken Tikka',
            price: '180 Rs.',
            url: chickenTikkaURL,
        },
        {
            name: 'Butter Chicken',
            price: '250 Rs.',
            url: butterChickenURL,
        },
        {
            name: 'Fish Fry',
            price: '180 Rs.',
            url: fishFryURL,
        },
        {
            name: 'Fish Curry',
            price: '250 Rs.',
            url: fishCurryURL,
        },
        {
            name: 'Egg Curry',
            price: '150 Rs.',
            url: eggCurryURL,
        },
    ]

  
    //create a menu card for each dish

    menutItemList.forEach(menuItem=>{
        let menuCard = document.createElement('div');
        menuCard.classList.add('menuCard');
        let imgDiv= document.createElement('div');
        let itemImg = new Image();
        itemImg.src= menuItem.url;
        itemImg.id= `${menuItem.name}`;
        itemImg.style.width= '250px';
        itemImg.style.height= '250px';
        imgDiv.appendChild(itemImg);
        menuCard.append(imgDiv);

         menuCard.innerHTML+= `
         <div class= 'itemDetails'>
            <div><strong>${menuItem.name}</strong></div>
            <div>Price : <strong>${menuItem.price}</strong></div>
            <div>Qty : <input type="number" name="qty" id="qty" value='0'></div>
            <button id='addToCart'>Add To Cart</button>
         </div>    
         `
    

        menuDiv.append(menuCard);
    })

 return menuDiv;
}