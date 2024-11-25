import { router } from "./main.js";
import { El } from "./el";

let database;
let counter = 0;
let imgUrl;
let title;
let publicId;
let price;
let size;
let color;

let isWishListed;
let userCart = [];
let wishList = [];

async function getData(id = publicId) {

    const url = "http://localhost:5173/Products/" + id;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      database = data;

      imgUrl = database.images;
      title = database.title;
      price = database.price;

      updateInfo();

    } catch (error) {
      console.error(error.message);
    }
}

async function getUserData(id = '1') {
    const url = "http://localhost:5173/users/" + id;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      database = data;

      userCart = database.cart;
      if(userCart == ''){
        userCart = [];
      }
      wishList = database.wishlist;

      for(let i = 0; i < database.cart.length; i++){
        if(database.cart[i].id == Number(publicId)){
            counter = +database.cart[i].counter
            break;
        }
        else{
            counter = 0;
        }
      }

      for(let i = 0; i < database.wishlist.length; i++){
        if(database.wishlist[i].id == publicId){
            isWishListed = true
            break;
        }
        else{
            isWishListed = false;
        }
      }

      updateInfo();

    } catch (error) {
      console.error(error.message);
    }
}

function updateInfo(){

    for(let i = 0; i < wishList.length; i++){
        if(wishList[i].id == publicId){
            isWishListed = true
            break;
        }
        else{
            isWishListed = false
        }
    }

    app.children[0].children[0].children[1].children[0].src = imgUrl;
    app.children[0].children[1].children[0].children[0].innerHTML = title;
    if(isWishListed){
        app.children[0].children[1].children[0].children[1].src = '/src/assets/pink-heart-icon.png';
    }
    else{
        app.children[0].children[1].children[0].children[1].src = '/src/assets/heart.svg';
    }
    app.children[0].children[2].children[1].innerHTML = counter;
    app.children[0].children[3].children[0].innerHTML = '$ ' + price;
}

export function productPage(id){

    publicId = id;

    getData(id)
    getUserData()

    return El({
        element: 'div',
        className: 'content w-[428px] h-fit',
        children: [
            El({
            element: 'div',
            className: 'header w-[428px] h-fit flex flex-col',
            children: [
                El({
                    element: 'button',
                    className: 'back-button w-[60px] h-[60px] m-[12px]',
                    eventListener: [
                        {
                            event: 'click',
                            callback: ()=>{history.back();}
                        }
                    ],
                    children: [
                        El({
                            element: 'img',
                            className: 'back-button-img',
                            src: '/src/assets/arrow-left-short.svg'
                        })
                    ]
                }),
                El({
                    element: 'div',
                    className: 'img-container w-[428px] h-[428px]',
                    children: [
                        El({
                            element: 'img',
                            className: 'product-img w-4/5 h-4/5 m-auto',
                            src: imgUrl
                        }),
                        El({
                            element: 'ul',
                            className: 'bar-container w-[120px] flex flex-row mx-auto mt-[12px] justify-evenly',
                            children: [
                                El({
                                    element: 'li',
                                    className:'bar flex flex-row',
                                    children: [
                                        El({
                                            element: 'img',
                                            className: 'w-[50px] h-[36px] mx-2',
                                            src: '/src/assets/bar-icon.png'
                                        }),
                                        El({
                                            element: 'img',
                                            className: 'w-[16px] h-[16px] mx-2 mt-2',
                                            src: '/src/assets/black-circle-icon.png'
                                        }),
                                        El({
                                            element: 'img',
                                            className: 'w-[16px] h-[16px] mx-2 mt-2',
                                            src: '/src/assets/black-circle-icon.png'
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        }),
        El({
            element: 'div',
            className: 'product-info',
            children: [
                El({
                    element: 'div',
                    className: 'top-row flex flex-row w-[380px] h-fit justify-between mx-auto',
                    children: [
                        El({
                            element: 'h1',
                            className: 'product-name font-bold text-[24px]',
                            children: [title]
                        }),
                        El({
                            element: 'img',
                            className: 'favorite-img w-[36px] h-[36px]',
                            eventListener: [
                                {
                                    event: 'click',
                                    callback: toggleWish
                                }
                            ],
                            src: '/src/assets/heart.svg'
                        })
                    ]
                }),
                El({
                    element: 'div',
                    className: 'middle-row w-[380px] h-fit mx-auto my-2 flex flex-row',
                    children: [
                        El({
                            element: 'div',
                            className: 'size-section flex flex-col',
                            children: [
                                El({
                                    element: 'h1',
                                    className: 'text-[22px] font-bold my-2 ml-2',
                                    children: ['Size']
                                }),
                                El({
                                    element: 'ul',
                                    className: 'Sizes flex flex-row mx-2 w-[150px] h-10 overflow-x-auto',
                                    children: [
                                        El({
                                            element: 'li',
                                            className: 'size1 rounded-full w-8 h-8 font-bold mr-2 border-2 border-black text-center',
                                            children: [
                                                El({
                                                    element: 'p',
                                                    className: 'size-text ml-[-2px] w-8 h-8',
                                                    children: ['38']
                                                })
                                            ],
                                            eventListener: [
                                                {
                                                    event: 'click',
                                                    callback: (event)=>{selectSize(event.target)}
                                                }
                                            ]
                                        }),
                                        El({
                                            element: 'li',
                                            className: 'size1 rounded-full w-8 h-8 font-bold mr-2 border-2 border-black text-center',
                                            children: [
                                                El({
                                                    element: 'p',
                                                    className: 'size-text ml-[-2px] w-8 h-8',
                                                    children: ['39']
                                                })
                                            ],
                                            eventListener: [
                                                {
                                                    event: 'click',
                                                    callback: (event)=>{selectSize(event.target)}
                                                }
                                            ]
                                        }),
                                        El({
                                            element: 'li',
                                            className: 'size1 rounded-full w-8 h-8 font-bold mr-2 border-2 border-black text-center',
                                            children: [
                                                El({
                                                    element: 'p',
                                                    className: 'size-text ml-[-2px] w-8 h-8',
                                                    children: ['40']
                                                })
                                            ],
                                            eventListener: [
                                                {
                                                    event: 'click',
                                                    callback: (event)=>{selectSize(event.target)}
                                                }
                                            ]
                                        }),
                                        El({
                                            element: 'li',
                                            className: 'size1 rounded-full w-8 h-8 font-bold mr-2 border-2 border-black text-center',
                                            children: [
                                                El({
                                                    element: 'p',
                                                    className: 'size-text ml-[-2px] w-8 h-8',
                                                    children: ['40']
                                                })
                                            ],
                                            eventListener: [
                                                {
                                                    event: 'click',
                                                    callback: (event)=>{selectSize(event.target)}
                                                }
                                            ]
                                        }),
                                    ]
                                }),
                            ]
                        }),
                        El({
                            element: 'div',
                            className: 'color-section flex flex-col',
                            children: [
                                El({
                                    element: 'h1',
                                    className: 'text-[22px] font-bold my-2 ml-2',
                                    children: ['Color']
                                }),
                                El({
                                    element: 'ul',
                                    className: 'colors flex flex-row mx-2 w-[150px] overflow-y-auto',
                                    children: [
                                        El({
                                            element: 'li',
                                            className: 'color1 rounded-full w-8 h-8 bg-red-400 mr-2'
                                        }),
                                        El({
                                            element: 'li',
                                            className: 'color2 rounded-full w-8 h-8 bg-blue-400 mr-2'
                                        }),
                                        El({
                                            element: 'li',
                                            className: 'color3 rounded-full w-8 h-8 bg-green-400 mr-2'
                                        })
                                    ]
                                }),
                        
                            ]
                        }),
                    ]
                })
            ]
        }),
        El({
            element: 'div',
            className: 'button-container w-[200px] rounded-2xl overflow-hidden bg-gray-100 flex flex-row justify-between mt-[24px] ml-[12px]',
            children: [
                El({
                    element: 'button',
                    className: 'add-button w-[80px] text-center text-[24px] rounded-full',
                    eventListener: [
                        {
                            event: 'click',
                            callback: (event)=>{add(event.target)}
                        }
                    ],
                    children: ['+']
                }),
                El({
                    element: 'h1',
                    className: 'counter w-[50px] font-semibold text-center mt-[5px]',
                    children: counter
                }),
                El({
                    element: 'button',
                    className: 'remove-button w-[80px] text-center text-[24px] rounded-full',
                    eventListener: [
                        {
                            event: 'click',
                            callback: (event)=>{remove(event.target)}
                        }
                    ],
                    children: ['-']
                })
            ]
        }),
        El({
            element: 'div',
            className: 'footer w-[380px] flex flex-row mx-auto mt-[24px] justify-between',
            children: [
                El({
                    element: 'h1',
                    className: 'price text-[36px] font-bold',
                    children: ['$3333']
                }),
                El({
                    element: 'button',
                    className: 'order-button w-[200px] h-[48px] rounded-3xl bg-black text-white text-center',
                    children: [
                        El({
                            element: 'h1',
                            className: 'order-button-text font-medium text-[16px]',
                            eventListener: [
                                {
                                    event: 'click',
                                    callback: updateCart
                                }
                            ],
                            children: ['Add to cart']
                        })
                    ]
                })
            ]
        })

        ]
    })
};

async function updateCart(){
    const url = "http://localhost:5173/users/1";

    let productFound = false;

    for(let i = 0; i < userCart.length; i++){
        if(userCart[i].id == publicId){
            userCart[i].counter = counter;
            productFound = true;
            break;
        }
    }

    if(!productFound){
        userCart.push({
            id:publicId,
            title,
            price,
            imgUrl,
            counter,
            whished: isWishListed
        })
    }

    const updateResponse = await fetch(url ,{
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({cart: userCart}) 
    })
}

async function toggleWish(){
    const url = "http://localhost:5173/users/1";

    if(isWishListed){
        for(let i = 0; i < wishList.length; i++){
            if(wishList[i].id == publicId){
                wishList.splice(i, 1)
                isWishListed = false;
                break;
            }
        }
    }
    else{
        wishList.push({
            id:publicId,
            title,
            price,
            imgUrl,
            counter
        })
        isWishListed = true;
    }

    const updateResponse = await fetch(url ,{
    method: 'PATCH',
    headers: {'Content-Type': 'application/json'}, 
    body: JSON.stringify({wishlist: wishList}) 
    })

    updateInfo()
    
}

function add(element){
    counter++;

    let parent = element.parentElement;
    let countDisplay = parent.children[1];
    countDisplay.innerHTML = counter;
}

function remove(element){
    if(counter > 0){
        counter--;

        let parent = element.parentElement;
        let countDisplay = parent.children[1];
        countDisplay.innerHTML = counter;
    }
}

function selectSize(element){
    let parentElement = element.parentElement
    let sizeContainer = parentElement.parentElement

    for(let i = 0; i < sizeContainer.children.length; i++){
        sizeContainer.children[i].classList.remove('bg-black')
        sizeContainer.children[i].classList.remove('text-white')
    }

    parentElement.classList.add('bg-black')
    parentElement.classList.add('text-white')

    size = element.innerHTML;
}

function selectColor(element){
    let parentElement = element.parentElement
    let colorContainer = parentElement.parentElement

    for(let i = 0; i < colorContainer.children.length; i++){
        sizeContainer.children[i].classList.remove('border-2')
        sizeContainer.children[i].classList.remove('border-black')
    }

    parentElement.classList.add('border-2')
    parentElement.classList.add('border-black')

    size = element.innerHTML;
}