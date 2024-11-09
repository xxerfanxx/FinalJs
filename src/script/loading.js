import {El} from "./el.js";
import logo from '../assets/logo.svg';

export function startUpPage(){

    return El({
        element: 'div',
        className: 'header w-full h-full flex flex-col',
        children: [
            El({
                element: 'div',
                className: 'logo-container w-[231px] h-[63px] flex flex-row mt-[392px] mx-[98px] justify-between',
                children: [
                    El({
                        element: 'div',
                        className: 'logo-background bg-black rounded-full w-[59px] h-[59px] pt-2',
                        children: [
                            El({
                                element: 'img',
                                className: 'w-[26.54px] h-[39.93px] m-auto',
                                src: logo
                            })
                        ]
                    }),
                    El({
                        element: 'h1',
                        className: 'logo-text font-bold text-[52px] mt-[-10px] mr-2',
                        children: 'Shoea'
                    })
                ]
            }),
            El({
                element: 'div',
                className: 'loading-container w-[48px] h-[48px] mt-[306px] mx-[190px]',
                children: [
                    El({
                        element: 'img',
                        className: 'loading-img w-[48px] h-[48px]',
                        src: '/src/assets/spinner-atom.svg'
                    })
                ]
            })
        ]
    })
};