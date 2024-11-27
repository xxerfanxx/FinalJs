import { router } from "./main.js";
import { El } from "./el";

let database;
let counter = 0;
let orders;
let totalPrice;
let userCart;

function render(page){
    app.innerHTML = '';
    app.append(page);
}

export async function getData() {
    const url = "http://localhost:5173/users/1";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      database = data;

      userCart = database.cart;

      if(userCart == ''){
        userCart = []
      }

      syncProducts()
      render(cartPage())

    } catch (error) {
      console.error(error.message);
    }
}

getData();

function syncProducts(){
    let ordersList = createOrders();

      for(let i = 0; i < database.length; i++){
        app.children[0].children[1].append(ordersList[i]);
      }

    orders = El({
        element: 'ul',
        className: 'order-container w-[380px] h-full mx-auto mt-[12px] overflow-y-auto flex flex-col',
        children: ordersList
    })

    totalPrice = El({
        element: 'h1',
        className: 'title font-semibold text-[20px] text-center',
        children: ['total price: $' + calculatePrice()]
    })
}

function createOrders(){

    let orderList = [];
    
    for(let i = 0; i < database.cart.length; i++){
        let productId = database.cart[i].id
        let title = database.cart[i].title;
        let price = database.cart[i].price;
        let imgUrl = database.cart[i].imgUrl;
        let orderCount = +database.cart[i].counter;
        let size = database.cart[i].size;
        let color = database.cart[i].color;

        orderList.push(El({
            element: 'li',
            className: 'order ' + productId + ' w-[360px] h-[150px] rounded-2xl bg-white shadow-xl m-2 flex flex-row justify-between',
            children: [
                El({
                    element: 'div',
                    className: 'img-container w-[120px] h-[120px] rounded-2xl overflow-hidden bg-gray-100 my-[12px] ml-[12px]',
                    children: [
                        El({
                            element: 'img',
                            className: 'product-img',
                            src: imgUrl
                        })
                    ]
                }),
                El({
                    element: 'div',
                    className: 'right-side flex flex-col w-[180px] h-fit mr-[12px]',
                    children: [
                        El({
                            element: 'div',
                            className: 'top-row flex flex-row justify-between mt-[12px]',
                            children: [
                                El({
                                    element: 'h1',
                                    className: 'title font-semibold text-[24px] text-center',
                                    children: [title]
                                }),
                                El({
                                    element: 'img',
                                    className: 'trash-can ' + productId + ' w-[24px] h-[24px] mt-[5px]',
                                    eventListener: [
                                        {
                                            event: 'click',
                                            callback: (event)=>{warningMessage(event.target)}
                                        }
                                    ],
                                    src: '/src/assets/trash-icon.svg'
                                })
                            ]
                        }),
                        El({
                            element: 'div',
                            className: 'middle-row flex flex-row w-[180px] h-fit mr-[12px] justify-between',
                            children: [
                                El({
                                    element: 'div',
                                    className: 'size rounded-full w-8 h-8 font-bold mr-2 border-2 border-black text-center',
                                    children: [
                                        El({
                                            element: 'p',
                                            className: 'size-text ml-[-2px] w-8 h-8',
                                            children: [size]
                                        })
                                    ]
                                }),
                                El({
                                    element: 'li',
                                    className: `color rounded-full w-8 h-8 font-bold mr-2 text-center bg-${color}`,
                                    children: [
                                        El({
                                            element: 'p',
                                            className: 'color-text ml-[-2px] w-8 h-8 text-[16px] mt-2 text-black drop-shadow-md',
                                            children: [color]
                                        })
                                    ]
                                })
                            ]
                        }),
                        El({
                            element: 'div',
                            className: 'bottom-row flex flex-row w-[180px] h-fit mr-[12px] justify-between mt-2',
                            children: [
                                El({
                                    element: 'h1',
                                    className: 'title font-semibold text-[24px] text-center',
                                    children: ['$' + price]
                                }),
                                El({
                                    element: 'div',
                                    className: 'button-container w-[100px] rounded-2xl overflow-hidden bg-gray-100 flex flex-row justify-between ml-[12px]',
                                    children: [
                                        El({
                                            element: 'button',
                                            className: 'add-button ' + productId + ' w-[40px] text-center text-[24px] rounded-full',
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
                                            className: 'counter w-[30px] font-semibold text-center mt-[5px]',
                                            children: [orderCount]
                                        }),
                                        El({
                                            element: 'button',
                                            className: 'reduce-button ' + productId + ' w-[40px] text-center text-[24px] rounded-full',
                                            eventListener: [
                                                {
                                                    event: 'click',
                                                    callback: (event)=>{reduce(event.target)}
                                                }
                                            ],
                                            children: ['-']
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        }))
    }

    return orderList;
}

export function cartPage(){

    return El({
        element: 'div',
        className: 'content flex flex-col w-[428px] h-[800px] overflow-hidden',
        children: [
            El({
                element: 'div',
                className: 'header w-[380px] mx-auto flex flex-row justify-between mt-[24px]',
                children: [
                    El({
                        element: 'div',
                        className: 'left-side w-[150px] flex flex-row justify-between text-center',
                        children: [
                            El({
                                element: 'img',
                                className: 'w-[30px] h-[30px] m-2',
                                src: '/src/assets/logo-black.svg'
                            }),
                            El({
                                element: 'h1',
                                className: 'page-title font-semibold text-[24px]',
                                children: ['My Cart']
                            })
                        ]
                    }),
                    El({
                        element: 'button',
                        className: 'search-button',
                        children: [
                            El({
                                element: 'img',
                                className: 'search-img w-[24px] h-[24px]',
                                src: '/src/assets/input-icon.svg'
                            })
                        ]
                    })
                    
                ]
            }),
            orders,
            El({
                element: 'div',
                className: 'total w-[428px] h-fit flex flex-row bg-white fixed bottom-16 z-10 justify-evenly',
                children: [
                    totalPrice,
                    El({
                        element: 'button',
                        className: 'submit w-[200px] bg-black rounded-3xl text-white text-center text-[24px] font-semibold',
                        eventListener: [
                            {
                                event: 'click',
                                callback: ()=>{router.navigate('/checkout')}
                            }
                        ],
                        children: ['Checkout']
                    })
                ]
            }),
            El({
                element: 'div',
                className: 'footer h-[66px] w-[428px] bg-white mt-[12px] flex flex-row justify-evenly bottom-0 position fixed',
                children: [
                    El({
                        element: 'button',
                        className: 'home-button w-[29px] h-[38px] flex flex-col mt-[12px]',
                        eventListener: [
                            {
                                event : 'click',
                                callback: ()=>{router.navigate('/home')}
                            }
                        ],
                        children: [
                            El({
                                element: 'img',
                                className: 'home-icon m-auto',
                                src: '/src/assets/home-icon-untoggled.png'
                            }),
                            El({
                                element: 'h1',
                                className: 'button-text font-semibold text-[10px]',
                                children: 'Home'
                            })
                        ]
                    }),
                    El({
                        element: 'button',
                        className: 'cart-button w-[29px] h-[38px] flex flex-col mt-[12px]',
                        eventListener: [
                            {
                                event : 'click',
                                callback: ()=>{router.navigate('/cart')}
                            }
                        ],
                        children: [
                            El({
                                element: 'img',
                                className: 'home-icon m-auto',
                                src: '/src/assets/cart-icon-fill.png'
                            }),
                            El({
                                element: 'h1',
                                className: 'button-text font-semibold text-[10px] ml-[5px]',
                                children: 'Cart'
                            })
                        ]
                    }),
                    El({
                        element: 'button',
                        className: 'orders-button w-[29px] h-[38px] flex flex-col mt-[12px]',
                        eventListener: [
                            {
                                event : 'click',
                                callback: ()=>{router.navigate('/orders')}
                            }
                        ],
                        children: [
                            El({
                                element: 'img',
                                className: 'home-icon m-auto',
                                src: '/src/assets/order-icon.svg'
                            }),
                            El({
                                element: 'h1',
                                className: 'button-text font-semibold text-[10px]',
                                children: 'Orders'
                            })
                        ]
                    }),
                    El({
                        element: 'button',
                        className: 'wallet-button w-[29px] h-[38px] flex flex-col mt-[12px]',
                        children: [
                            El({
                                element: 'img',
                                className: 'home-icon m-auto',
                                src: '/src/assets/wallet-icon.svg'
                            }),
                            El({
                                element: 'h1',
                                className: 'button-text font-semibold text-[10px]',
                                children: 'Wallet'
                            })
                        ]
                    }),
                    El({
                        element: 'button',
                        className: 'profile-button w-[29px] h-[38px] flex flex-col mt-[12px]',
                        children: [
                            El({
                                element: 'img',
                                className: 'home-icon m-auto',
                                src: '/src/assets/person-icon.svg'
                            }),
                            El({
                                element: 'h1',
                                className: 'button-text font-semibold text-[10px]',
                                children: 'Profile'
                            })
                        ]
                    })
                ]
            })
        ]
    })
}

function calculatePrice(){
    let sum = 0;
    for(let i = 0; i < userCart.length; i++){
        sum += Number(userCart[i].price) * Number(userCart[i].counter);
    }
    return sum
}

async function updateOrder(userId = '1', prodId, counter){
    const url = "http://localhost:5173/users/"+userId;

    for(let i = 0; i < userCart.length; i++){
        if(userCart[i].id == prodId){
            if(counter == 0){
                userCart.splice(i, 1);
            }
            else{
                userCart[i].counter = counter;
            }

            break;
        }
    }

    const updateResponse = await fetch(url,{
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify({cart: userCart})
    })

    getData()
}

function add(element){
    let prodId = element.classList[1];
    let parent = element.parentElement;
    let countDisplay = parent.children[1];
    let counter = +countDisplay.innerHTML
    counter++
    countDisplay.innerHTML = counter;
    updateOrder('1', prodId, counter);
}

function reduce(element){
    let prodId = element.classList[1];
    let parent = element.parentElement;
    let countDisplay = parent.children[1];
    let counter = +countDisplay.innerHTML
    if(counter > 1){
        counter--;
        countDisplay.innerHTML = counter;
        updateOrder('1', prodId, counter);
    }
}

function warningMessage(element){
    let parent = element.parentElement
    app.append(
        El({
            element: 'div',
            className: 'bakcground fixed z-10 bg-[rgba(0,0,0,0.5)] w-full h-full top-0 left-0',
            children:[
                El({
                    element: 'div',
                    className: 'warning-message w-[250px] h-[120px] rounded-3xl shadow-md m-auto text-center flex flex-col fixed top-1/2 right-1/4 z-100 bg-white',
                    children: [
                        El({
                            element: 'div',
                            className: 'top-row flex flex-row mt-2',
                            children: [
                                El({
                                    element: 'img',
                                    className: 'warning-img ml-[12px] w-6 h-6 animate-pulse',
                                    src: '/src/assets/warning-icon.png'
                                }),
                                El({
                                    element: 'h1',
                                    className: 'message-title text-[18px] mx-auto',
                                    children: ['Are you sure ?']
                                })
                            ]
                        }),
                        El({
                            element: 'div',
                            className: 'middle-row flex flex-row mt-2',
                            children: [
                                El({
                                    element: 'h1',
                                    className: 'message-description text-[18px] mx-auto',
                                    children: [`Deleting ${parent.children[0].innerHTML} from cart`]
                                })
                            ]
                        }),
                        El({
                            element: 'div',
                            className: 'button-container flex flex-row text-center justify-center mt-2 pt-2 border-t-2 border-t-gray-200 justify-evenly',
                            children: [
                                El({
                                    element: 'button',
                                    className: 'no-button w-[60px] h-fit text-center',
                                    children: ['No'],
                                    eventListener: [
                                        {
                                            event: 'click',
                                            callback: ()=>{render(cartPage())}
                                        }
                                    ]
                                }),
                                El({
                                    element: 'button',
                                    className: 'yes-button w-[60px] h-fit text-center text-red-400',
                                    children: ['Yes'],
                                    eventListener: [
                                        {
                                            event: 'click',
                                            callback: ()=>{remove(element)}
                                        }
                                    ]
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    )
}

function remove(element){
    let prodId = element.classList[1];
    updateOrder('1', prodId, 0);
}