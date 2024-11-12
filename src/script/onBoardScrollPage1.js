import {El} from "./el.js";
import { obsPage2 } from "./onBoardScrollPage2.js";

export function obsPage1(){

    return El({
        element: 'div',
        className: 'container w-[428px] h-[926px] flex flex-col bg-red-600',
        children: [
            El({
                element: 'div',
                className: 'top-img w-[428px] h-[602px] bg-[url(/src/assets/obsp1-img2.png)] bg-no-repeat'
            }),
            El({
                element: 'div',
                className: 'bottom-content w-[428px] h-[324px] flex flex-col bg-white',
                children: [
                    El({
                        element: 'h1',
                        className: 'description-text w-[380px] text-center font-semibold text-[32px] mx-auto mt-[32px] h-100px leading-[38px]',
                        children: 'We provide high quality products just for you'
                    }),
                    El({
                        element: 'div',
                        className: 'w-[102px] h-[23px] flex flex-row mx-auto justify-between mt-[59px]',
                        children: [
                            El({
                                element: 'img',
                                className: 'first-line',
                                src: '/src/assets/active-line.svg'
                            }),
                            El({
                                element: 'img',
                                className: 'first-line',
                                src: '/src/assets/deactive-line.svg'
                            }),
                            El({
                                element: 'img',
                                className: 'first-line',
                                src: '/src/assets/deactive-line.svg'
                            })
                        ]
                    }),
                    El({
                        element: 'button',
                        className: 'w-[380px] h-[45px] bg-slate-800 rounded-3xl mx-auto text-center mt-[40px]',
                        eventListener: [
                            {
                                event: 'click',
                                callback: goToNextPage
                            }
                        ],
                        children: [
                            El({
                                element: 'p',
                                className: 'text-white text-[14px] font-medium',
                                children: 'Next'
                            })
                        ]
                    })
                ]
            })
        ]
    })
}

function render(page){
    app.innerHTML = '';
    app.append(page);
}

function goToNextPage(){
    render(obsPage2())
}