import { router } from "./main.js";
import { El } from "./el";

let database;
let counter = 0;

function render(page){
    app.innerHTML = '';
    app.append(page);
}

async function getData() {
    const url = "http://localhost:5173/Products?order_gt=0";

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      database = data;

      createOrders()
      render(cartPage())


    } catch (error) {
      console.error(error.message);
    }
}

getData();

function createOrders(){

    let orderList = [];
    
    for(let i = 0; i < database.length; i++){
        let title = database[i].title;
        let price = database[i].price;
        let imgUrl = database[i].images;
        let orderCount = database[i].order;

        orderList.push(El({
            element: 'li',
            className: 'order1 w-full h-[150px] rounded-2xl bg-white shadow-md m-2 flex flex-row justify-between',
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
                    className: 'right-sid flex flex-col w-[180px] h-fit mr-[12px]',
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
                                    className: 'trash-can w-[24px] h-[24px] mt-[5px]',
                                    src: '/src/assets/trash-icon.svg'
                                })
                            ]
                        }),
                        El({
                            element: 'div',
                            className: 'bottom-row flex flex-row w-[180px] h-fit mr-[12px] mt-[48px] justify-between',
                            children: [
                                El({
                                    element: 'h1',
                                    className: 'title font-semibold text-[24px] text-center',
                                    children: [price]
                                }),
                                El({
                                    element: 'div',
                                    className: 'button-container w-[100px] rounded-2xl overflow-hidden bg-gray-100 flex flex-row justify-between ml-[12px]',
                                    children: [
                                        El({
                                            element: 'button',
                                            className: 'add-button w-[40px] text-center text-[24px] rounded-full',
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
                                            children: orderCount
                                        }),
                                        El({
                                            element: 'button',
                                            className: 'remove-button w-[40px] text-center text-[24px] rounded-full',
                                            eventListener: [
                                                {
                                                    event: 'click',
                                                    callback: (event)=>{remove(event.target)}
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
        className: 'content flex flex-col w-[428px] h-fit',
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
            El({
                element: 'ul',
                className: 'order-container w-[380px] h-[600px] mx-auto mt-[12px] overflow-y-auto bg-gray-100 flex flex-row',
                children: [
                    El({
                        element: 'li',
                        className: 'order1 w-full h-[150px] rounded-2xl bg-white shadow-md m-2 flex flex-row justify-between',
                        children: [
                            El({
                                element: 'div',
                                className: 'img-container w-[120px] h-[120px] rounded-2xl overflow-hidden bg-gray-100 my-[12px] ml-[12px]',
                                children: [
                                    El({
                                        element: 'img',
                                        className: 'product-img',
                                        src: ''
                                    })
                                ]
                            }),
                            El({
                                element: 'div',
                                className: 'right-sid flex flex-col w-[180px] h-fit mr-[12px]',
                                children: [
                                    El({
                                        element: 'div',
                                        className: 'top-row flex flex-row justify-between mt-[12px]',
                                        children: [
                                            El({
                                                element: 'h1',
                                                className: 'title font-semibold text-[24px] text-center',
                                                children: ['adidas']
                                            }),
                                            El({
                                                element: 'img',
                                                className: 'trash-can w-[24px] h-[24px] mt-[5px]',
                                                src: '/src/assets/trash-icon.svg'
                                            })
                                        ]
                                    }),
                                    El({
                                        element: 'div',
                                        className: 'bottom-row flex flex-row w-[180px] h-fit mr-[12px] mt-[48px] justify-between',
                                        children: [
                                            El({
                                                element: 'h1',
                                                className: 'title font-semibold text-[24px] text-center',
                                                children: ['$900']
                                            }),
                                            El({
                                                element: 'div',
                                                className: 'button-container w-[100px] rounded-2xl overflow-hidden bg-gray-100 flex flex-row justify-between ml-[12px]',
                                                children: [
                                                    El({
                                                        element: 'button',
                                                        className: 'add-button w-[40px] text-center text-[24px] rounded-full',
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
                                                        children: counter
                                                    }),
                                                    El({
                                                        element: 'button',
                                                        className: 'remove-button w-[40px] text-center text-[24px] rounded-full',
                                                        eventListener: [
                                                            {
                                                                event: 'click',
                                                                callback: (event)=>{remove(event.target)}
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
                    })
                ]
            })
        ]
    })
}

function add(element){

}

function remove(element){

}