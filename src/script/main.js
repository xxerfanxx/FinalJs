import {startUpPage} from './loading.js';
import {welcomePage} from './welcome.js';
import {obsPage1} from './onBoardScrollPage1.js';

const app = document.getElementById('app');

function render(page){
    app.innerHTML = '';
    app.append(page);
}

// render(startUpPage());
// render(welcomePage());
render(obsPage1());