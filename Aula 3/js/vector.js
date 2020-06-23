const images = ['img/comic.png', 'img/drink.jpg', 'img/sunset.jpg'];
let current_img = 0;

function changeimg(x){
    current_img = current_img + x;
    if(current_img >2)
        current_img = 0;
    
    else if(current_img < 0)
        current_img = 2;
    let imgPhoto = document.getElementById('image');
    imgPhoto.src = images[current_img];

}