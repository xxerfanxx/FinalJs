import {El} from "./el.js";

export function welcomePage(){

    return El({
        element: 'div',
        className: 'background-wallpaper w-[428px] h-[926px] bg-[url(/src/assets/shoes-wallpaper.png)] bg-no-repeat mx-auto',
        children: [
            El({
                element: 'div',
                className: 'w-full h-full bg-transparent',
                style:'background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.8) 100%);'
            })
        ]
    })
}