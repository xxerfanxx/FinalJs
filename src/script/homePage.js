import {El} from "./el.js";

export function homePage(){

    return El({
        element: 'div',
        className: 'content w-full h-full',
        children:[
            El({
                element: 'div',
                className: 'header flex flex-row justify-between mx-[24px] my-[16px]',
                children:[
                    El({
                        element: 'div',
                        className: 'left-side w-fit max-w-[220px] h-[48px] flex flex-row',
                        children: [
                            El({
                                element: 'div',
                                className: 'profile rounded-full w-[48px] h-[48px] bg-black mr-[12px] overflow-hidden',
                                children:[
                                    El({
                                        element: 'img',
                                        className: 'profile-img w-[48px] h-[48px] m-auto',
                                        src: '/src/assets/profile-img.jpg'
                                    })
                                ]
                            }),
                            El({
                                element: 'div',
                                className: 'text-container flex flex-col',
                                children: [
                                    El({
                                        element: 'h1',
                                        className: 'welcome-text font-medium text-[16px] w-fit h-fit',
                                        children: 'Good Morning 👋'
                                    }),
                                    El({
                                        element: 'h1',
                                        className: 'user-name-text font-bold text-[16px] w-fit h-fit',
                                        children: 'Erfan'
                                    })
                                ]
                            })
                        ]
                    }),
                    El({
                        element: 'div',
                        className: 'right-side w-fit h-fit flex flex-row mt-[15px] mb-[16px]',
                        children: [
                            El({
                                element: 'button',
                                className: 'notification-button w-fit h-fit',
                                children: [
                                    El({
                                        element: 'img',
                                        className: 'bell-img w-[24px] h-[22px]',
                                        src: '/src/assets/bell.svg'
                                    })
                                ]
                            }),
                            El({
                                element: 'button',
                                className: 'favorite-button w-fit h-fit ml-[16px]',
                                children: [
                                    El({
                                        element: 'img',
                                        className: 'heart-img w-[24px] h-[24px]',
                                        src: '/src/assets/heart.svg'
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            El({
                element: 'div',
                className: 'search flex flex-row w-[380px] h-[37px] mx-auto mt-[8px] bg-slate-50 rounded-sm overflow-hidden',
                children: [
                    El({
                        element: 'img',
                        className: 'search-icon w-[18px] h-[18px] my-auto mr-[5px] ml-[12px]',
                        src: '/src/assets/input-icon.svg'
                    }),
                    El({
                        element: 'input',
                        className: 'search-bar-input w-full h-full bg-transparent focus:outline-none',
                        placeholder: 'Search'
                    })
                ]
            }),
            El({
                element: 'div',
                className: 'brands w-[380px] h-[234px] mx-auto flex flex-wrap mt-[10px] py-[12px]',
                children: [
                    El({
                        element: 'div',
                        className: 'brand-container flex flex-col w-fit h-fit mr-[41px] ml-[6px]',
                        children: [
                            El({
                                element: 'div',
                                className: 'logo-container w-[60px] h-[60px] bg-gray-200 rounded-full overflow-hidden',
                                children:[
                                    El({
                                        element: 'img',
                                        className: 'logo-img mx-auto my-[20px] max-w-[60px] max-h-[60px]',
                                        src: '/src/assets/nike-logo.png'
                                    })
                                ]
                            }),
                            El({
                                element: 'h2',
                                className: 'brand-name font-semibold text-[14px] mx-auto mt-[13px]',
                                children: 'Nike'
                            }),
                        ]
                    }),
                    El({
                        element: 'div',
                        className: 'brand-container flex flex-col w-fit h-fit mr-[41px]',
                        children: [
                            El({
                                element: 'div',
                                className: 'logo-container w-[60px] h-[60px] bg-gray-200 rounded-full overflow-hidden',
                                children:[
                                    El({
                                        element: 'img',
                                        className: 'logo-img mx-auto my-[20px] max-w-[60px] max-h-[60px]',
                                        src: '/src/assets/adidas-logo.png'
                                    })
                                ]
                            }),
                            El({
                                element: 'h2',
                                className: 'brand-name font-semibold text-[14px] mx-auto mt-[13px]',
                                children: 'Adidas'
                            }),
                        ]
                    }),
                    El({
                        element: 'div',
                        className: 'brand-container flex flex-col w-fit h-fit mr-[41px]',
                        children: [
                            El({
                                element: 'div',
                                className: 'logo-container w-[60px] h-[60px] bg-gray-200 rounded-full overflow-hidden',
                                children:[
                                    El({
                                        element: 'img',
                                        className: 'logo-img mx-auto my-[20px] max-w-[60px] max-h-[60px]',
                                        src: '/src/assets/puma-logo.png'
                                    })
                                ]
                            }),
                            El({
                                element: 'h2',
                                className: 'brand-name font-semibold text-[14px] mx-auto mt-[13px]',
                                children: 'Puma'
                            }),
                        ]
                    }),
                    El({
                        element: 'div',
                        className: 'brand-container flex flex-col w-fit h-fit',
                        children: [
                            El({
                                element: 'div',
                                className: 'logo-container w-[60px] h-[60px] bg-gray-200 rounded-full overflow-hidden',
                                children:[
                                    El({
                                        element: 'img',
                                        className: 'logo-img mx-auto my-[20px] max-w-[60px] max-h-[60px]',
                                        src: '/src/assets/asics-logo.png'
                                    })
                                ]
                            }),
                            El({
                                element: 'h2',
                                className: 'brand-name font-semibold text-[14px] mx-auto mt-[13px]',
                                children: 'Asics'
                            }),
                        ]
                    }),
                    El({
                        element: 'div',
                        className: 'brand-container flex flex-col w-fit h-fit mr-[41px] mt-[28px] ml-[6px]',
                        children: [
                            El({
                                element: 'div',
                                className: 'logo-container w-[60px] h-[60px] bg-gray-200 rounded-full overflow-hidden',
                                children:[
                                    El({
                                        element: 'img',
                                        className: 'logo-img mx-auto my-[20px] max-w-[60px] max-h-[60px]',
                                        src: '/src/assets/reebok-logo.png'
                                    })
                                ]
                            }),
                            El({
                                element: 'h2',
                                className: 'brand-name font-semibold text-[14px] mx-auto mt-[13px]',
                                children: 'Reebok'
                            }),
                        ]
                    }),
                    El({
                        element: 'div',
                        className: 'brand-container flex flex-col w-fit h-fit mr-[41px] mt-[28px]',
                        children: [
                            El({
                                element: 'div',
                                className: 'logo-container w-[60px] h-[60px] bg-gray-200 rounded-full overflow-hidden',
                                children:[
                                    El({
                                        element: 'img',
                                        className: 'logo-img mx-auto my-[20px] max-w-[60px] max-h-[60px]',
                                        src: '/src/assets/asics-logo.png'
                                    })
                                ]
                            }),
                            El({
                                element: 'h2',
                                className: 'brand-name font-semibold text-[14px] mx-auto mt-[13px]',
                                children: 'Asics'
                            }),
                        ]
                    }),
                    El({
                        element: 'div',
                        className: 'brand-container flex flex-col w-fit h-fit mr-[41px] mt-[28px]',
                        children: [
                            El({
                                element: 'div',
                                className: 'logo-container w-[60px] h-[60px] bg-gray-200 rounded-full overflow-hidden',
                                children:[
                                    El({
                                        element: 'img',
                                        className: 'logo-img mx-auto my-[20px] max-w-[60px] max-h-[60px]',
                                        src: '/src/assets/nb-logo.png'
                                    })
                                ]
                            }),
                            El({
                                element: 'h2',
                                className: 'brand-name font-semibold text-[14px] mx-auto mt-[13px]',
                                children: 'New Ba...'
                            }),
                        ]
                    }),
                    El({
                        element: 'div',
                        className: 'brand-container flex flex-col w-fit h-fit mt-[28px]',
                        children: [
                            El({
                                element: 'div',
                                className: 'logo-container w-[60px] h-[60px] bg-gray-200 rounded-full overflow-hidden',
                                children:[
                                    El({
                                        element: 'img',
                                        className: 'logo-img mx-auto my-[20px] max-w-[60px] max-h-[60px]',
                                        src: '/src/assets/more-logo.png'
                                    })
                                ]
                            }),
                            El({
                                element: 'h2',
                                className: 'brand-name font-semibold text-[14px] mx-auto mt-[13px]',
                                children: 'More..'
                            }),
                        ]
                    })
                ]
            }),
            El({
                element: 'div',
                className: 'middle-content mx-[24px] flex flex-row justify-between mt-[16px]',
                children: [
                    El({
                        element: 'h1',
                        className: 'font-semibold text-[20px]',
                        children: 'Most Popular'
                    }),
                    El({
                        element: 'button',
                        className: 'see-all-button bg-transparent w-fit h-fit font-semibold text-[16px]',
                        children: 'See All'
                    })
                ]
            }),
            El({
                element: 'ul',
                className: 'categories flex flex-row overflow-auto w-[400px] ml-4 mt-[20px]',
                children: [
                    El({
                        element: 'li',
                        className: 'all border-2 border-black px-2 rounded-3xl mx-2',
                        children: 'All',
                        eventListener: [
                            {
                                event: 'click',
                                callback: (event)=>{toggleColor(event.target)}
                            }
                        ]
                    }),
                    El({
                        element: 'li',
                        className: 'nike border-2 border-black px-2 rounded-3xl mx-2',
                        children: 'Nike',
                        eventListener: [
                            {
                                event: 'click',
                                callback: (event)=>{toggleColor(event.target)}
                            }
                        ]
                    }),
                    El({
                        element: 'li',
                        className: 'adidas border-2 border-black px-2 rounded-3xl mx-2',
                        children: 'Adidas',
                        eventListener: [
                            {
                                event: 'click',
                                callback: (event)=>{toggleColor(event.target)}
                            }
                        ]
                    }),
                    El({
                        element: 'li',
                        className: 'puma border-2 border-black px-2 rounded-3xl mx-2',
                        children: 'Asics',
                        eventListener: [
                            {
                                event: 'click',
                                callback: (event)=>{toggleColor(event.target)}
                            }
                        ]
                    }),
                    El({
                        element: 'li',
                        className: 'puma border-2 border-black px-2 rounded-3xl mx-2',
                        children: 'Puma',
                        eventListener: [
                            {
                                event: 'click',
                                callback: (event)=>{toggleColor(event.target)}
                            }
                        ]
                    }),
                    El({
                        element: 'li',
                        className: 'puma border-2 border-black px-2 rounded-3xl mx-2',
                        children: 'Puma',
                        eventListener: [
                            {
                                event: 'click',
                                callback: (event)=>{toggleColor(event.target)}
                            }
                        ]
                    }),
                    El({
                        element: 'li',
                        className: 'puma border-2 border-black px-2 rounded-3xl mx-2',
                        children: 'Puma',
                        eventListener: [
                            {
                                event: 'click',
                                callback: (event)=>{toggleColor(event.target)}
                            }
                        ]
                    })
                ]
            })
        ]
    })   
}

function toggleColor(element){
    if(element.classList.contains('active')){
        element.classList.remove('active')
        element.classList.remove('bg-black')
        element.classList.remove('text-white')
    }
    else{
        element.classList.add('active')
        element.classList.add('bg-black')
        element.classList.add('text-white')
    }
}