import { router } from "./main.js";
import { El } from "./el";

let database;

function render(page){
    app.innerHTML = '';
    app.append(page);
}

async function getData() {
    const url = "http://localhost:5173/Products";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const data = await response.json();
      database = data;

      render(cartPage())

    } catch (error) {
      console.error(error.message);
    }
}

getData();

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
                className: 'nothing w-[380px] h-[600px] mx-auto mt-[12px] overflow-y-auto bg-gray-100 flex flex-row',
                children: [
                    El({
                        element: 'li',
                        className: 'order1 w-full h-[150px] rounded-2xl bg-white shadow-md m-2',
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
                            })
                        ]
                    })
                ]
            })
        ]
    })
}