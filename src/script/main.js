import {startUpPage} from './loading.js';
import {welcomePage} from './welcome.js';
import {obsPage1} from './onBoardScrollPage1.js';
import {obsPage2} from './onBoardScrollPage2.js';
import {obsPage3} from './onBoardScrollPage3.js';
import {loginPage} from './login.js';

const app = document.getElementById('app');

function render(page){
    app.innerHTML = '';
    app.append(page);
}

// render(startUpPage());
// render(welcomePage());
// render(obsPage1());
// render(obsPage2());
// render(obsPage3());
render(loginPage());