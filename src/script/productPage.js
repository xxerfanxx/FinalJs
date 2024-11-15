import { router } from "./main.js";
import { El } from "./el";

let database;
let counter = 0;
let imgUrl;
let title;
let publicId;
let price;
let isWishListed;

async function getData(id = publicId) {

    const url = "http://localhost:5173/Products/" + id;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      database = data;

      counter = database.order
      imgUrl = database.images;
      title = database.title;
      price = database.price;
      isWishListed = database.wished == true?true:false;

      updateInfo();

    } catch (error) {
      console.error(error.message);
    }
}

function updateInfo(){
    app.children[0].children[0].children[1].children[0].src = imgUrl;
    app.children[0].children[1].children[0].children[0].innerHTML = title;
    app.children[0].children[2].children[1].innerHTML = counter;
    app.children[0].children[3].children[0].innerHTML = '$ ' + price;

    if(isWishListed){
        app.children[0].children[1].children[0].children[1].src = ''
    }
}

export function productPage(id){

    publicId = id;

    getData(id)

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
                            callback: ()=>{router.navigate('/home')}
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
                                    className:'bar1',
                                    children: [
                                        El({
                                            element: 'img',
                                            src: '/src/assets/'
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
                            src: '/src/assets/heart.svg'
                        })
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
                                    callback: updateOrder
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

async function updateOrder(){
    const url = "http://localhost:5173/Products/"+publicId;

    const updateResponse = await fetch(`http://localhost:5173/Products/${publicId}`,{
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({order: counter}) 
    })

    alert('cart updated')
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