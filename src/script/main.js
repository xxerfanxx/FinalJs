import {El} from "./el.js";
import logo from '../assets/logo.svg';

const header = function (){

    return El({element: 'header',
        children: [El({
            element: 'h1',
            children: ['Shoea']
        }),
    El({
        element: 'div',
        children: [El({
            element: 'img',
            className: 'w-full h-full p-2',
            src:logo
        })],
        id: 'logoWrapper',
        className: 'bg-black text-green-400 rounded-full w-12 h-12'
    })]
    })
};

const app = document.getElementById('app');
app.append(header());