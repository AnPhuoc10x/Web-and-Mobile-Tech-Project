//đừng bấm format JS
const Header = document.querySelector("#Header");
function HeaderClick() {
  console.log('Header was clicked');
  open(
    "https://anphuoc10x.github.io/Web-and-Mobile-Tech-Project/HomePage/","_self");
}
Header.addEventListener('click', HeaderClick);

const Product_Button = document.querySelector(".Product-Button");
const HomePage_Button = document.querySelector(".HomePage-Button");
const About_Button = document.querySelector(".About-Button");
const Menu = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");
const MenuButton = document.querySelector(".menu");
MenuButton.addEventListener("click", MenuButtonClick);
function MenuButtonClick() {
  const ButtonName = event.target.innerHTML;
  console.log(ButtonName);
  open(
    "https://anphuoc10x.github.io/Web-and-Mobile-Tech-Project/" + ButtonName + "/","_self");
}
let MenuStatus = "close";

function OverlayOn() {
  overlay.style.display = "block";
}
function OverlayOff() {
  overlay.style.display = "none";
}

function ProductButtonClick() {
  console.log("Product button was clicked");
  if (MenuStatus == "close") {
    Menu.style.display = "flex";
    OverlayOn();
    MenuStatus = "open";
    console.log("Menu " + MenuStatus);
    return MenuStatus;
  } else {
    Menu.style.display = "none";
    OverlayOff();
    MenuStatus = "close";
    console.log("Menu " + MenuStatus);
    return MenuStatus;
  }
}
function OverlayClick() {
  Menu.style.display = "none";
  OverlayOff();
  MenuStatus = "close";
  console.log("Menu " + MenuStatus);
  return MenuStatus;
}

overlay.addEventListener("click", OverlayClick);
Product_Button.addEventListener("click", ProductButtonClick);
function HomePage_ButtonClick() {
  open(
    "https://anphuoc10x.github.io/Web-and-Mobile-Tech-Project/HomePage/","_self");
}
function About_ButtonClick() {
  open(
    "https://anphuoc10x.github.io/Web-and-Mobile-Tech-Project/About/","_self");
}
HomePage_Button.addEventListener("click", HomePage_ButtonClick);
About_Button.addEventListener("click", About_ButtonClick);


//Ảnh chạy
const PHOTO_LIST = [
  "https://i.ibb.co/LhhsyhN/deepdish.jpg",
  "https://i.ibb.co/fQdypjL/flatbread.jpg",
  "https://i.ibb.co/bLJQz5L/frenchbread.jpg"
];
const PHOTO_NAME_LIST = ["Meat Lover Pizza","Olive Pizza","Cheese Pizza"];
const PHOTO_PRODUCTNAME_LINK = [
  "https://i.ibb.co/LhhsyhN/deepdish.jpg",
  "https://i.ibb.co/fQdypjL/flatbread.jpg",
  "https://i.ibb.co/bLJQz5L/frenchbread.jpg"]; //link product zo đây

function createImage(src) {
  const image = document.createElement("img");
  image.src = src;
  picture = document.querySelector("#ProductImage");
  SlideImage = picture.appendChild(image);
  SlideImage.classList.add(".SlideImage");
}


const ImageBox = document.querySelector("#ProductImage");
const buttonLeft = document.querySelector(".ButtonLeft");
const buttonRight = document.querySelector(".ButtonRight");
const ProductName = document.querySelector(".ProductName");
buttonLeft.addEventListener('click', LeftonClick); 
buttonRight.addEventListener('click', RightonClick); 

let ProductLink=PHOTO_PRODUCTNAME_LINK[0];
createImage(PHOTO_LIST[0]); //create image when page first load
ProductName.innerHTML=PHOTO_NAME_LIST[0]; //create product name when page first load
//ProductName.addEventListener('click',event => {  open(PHOTO_PRODUCTNAME_LINK[0]);}); //add link here
 ProductName.addEventListener('click',event => {  open(ProductLink);});

function ChangeProductName() {
  ProductName.innerHTML= ImageName;

}

let nextIndex = 0;
function LeftonClick() {
  if (nextIndex == 0) {
    return;
  }
  else {
  console.log("Left clicked");
  nextIndex--;
  console.log(nextIndex);
  ImageBox.innerHTML = '';
  const AppearImage = createImage(PHOTO_LIST[nextIndex]);
     ImageName = PHOTO_NAME_LIST[nextIndex];
      ProductLink = PHOTO_PRODUCTNAME_LINK[nextIndex];
    console.log(ImageName);
    ChangeProductName();
  //ImageBox.appendChild(AppearImage); 

  }
  
  }

function RightonClick(){
   if (nextIndex == ((PHOTO_LIST.length) - 1)) {
     return;
   }
  else {
  console.log("Right clicked");
  nextIndex++; 
  console.log(nextIndex);
  ImageBox.innerHTML = '';
  const AppearImage = createImage(PHOTO_LIST[nextIndex]);
     ImageName = PHOTO_NAME_LIST[nextIndex];
    ProductLink = PHOTO_PRODUCTNAME_LINK[nextIndex];
    console.log(ImageName);
     ChangeProductName();
 // ImageBox.appendChild(AppearImage); 
   

  }
}


document.querySelector('#ContactNowButton').addEventListener('click',event => {  open("https://anphuoc10x.github.io/Web-and-Mobile-Tech-Project/About/","_self");});


document.querySelector("#Equipments").addEventListener('click',event => {  open("https://anphuoc10x.github.io/Web-and-Mobile-Tech-Project/Equipments/","_self");});
document.querySelector("#Accessories").addEventListener('click',event => {  open("https://anphuoc10x.github.io/Web-and-Mobile-Tech-Project/Accessories/","_self");});
document.querySelector("#Parts").addEventListener('click',event => {  open("https://anphuoc10x.github.io/Web-and-Mobile-Tech-Project/Parts/","_self");});
document.querySelector("#Supplies").addEventListener('click',event => {  open("https://anphuoc10x.github.io/Web-and-Mobile-Tech-Project/Supplies/","_self");});