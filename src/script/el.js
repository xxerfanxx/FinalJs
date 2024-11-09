// export default function createElement(parentName = '', elementName, className="", idName="", inputInnerHTML="", inputInnerText=""){

//     let parentElement = parentName?document.querySelector(`${parentName}`):document.getElementsByTagName('BODY')[0];

//     parentElement.innerHTML += `<${elementName}></${elementName}>`

//     let newElement = parentElement.getElementsByTagName(elementName).item(parentElement.getElementsByTagName(elementName).length - 1);

//     if(className){
//         newElement.setAttribute("class", className);
//     }

//     if(idName){
//         newElement.setAttribute("id", idName);
//     }

//     if(inputInnerHTML){
//         newElement.innerHTML = inputInnerHTML;
//     }

//     if(inputInnerText){
//         newElement.innerText = inputInnerText;
//     }

//     // parentElement.appendChild(newElement);

// }

export function El({
    element,
    children,
    eventListener,
    dataset,
    restAttrs = {},
    className = "",
    ...rest
    }) {
    const elem = document.createElement(element);
    for (const attr in rest) {
    elem[attr] = rest[attr];
    }
    if (children) {
    for (const child of children) {
    elem.append(child);
    }
    }
    if (eventListener) {
    eventListener.map((el) => elem.addEventListener(el.event, el.callback));
    }
    if (dataset) {
    for (const key in dataset) {
    elem.dataset[key] = dataset[key];
    }
    }
    for (const key in restAttrs) {
    elem.setAttribute(key, restAttrs[key]);
    }
    elem.setAttribute("class", className);
    return elem;
    }
    
    
    const header = El({
    element: "header",
    className: "flex items-center justify-center bg-red-300"
    })