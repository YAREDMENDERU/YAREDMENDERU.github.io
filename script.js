const images = [
    "./images/img-1.jpg",
    "./images/img-2.jpg",
    "./images/img-3.jpg",
    "./images/img-4.jpg",
    "./images/img-5.jpg"
];



const coverImage = document.getElementById('profile-picture')
const modalPage = document.getElementById('modal')
const firstPicture = document.getElementById('profile-picture')
const nextPicture = document.getElementById('next-button')
const backPicture = document.getElementById('back-button')


let imageIndex =1
function imageChanging(){
    if(imageIndex < images.length){
        coverImage.src = images[imageIndex]
        imageIndex++;


    }
    else{
        imageIndex = 0;
        coverImage.src = images[imageIndex]
    }
}
setInterval(imageChanging, 3000);
