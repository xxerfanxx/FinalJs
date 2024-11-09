import {startUpPage} from './loading.js';
import {welcomePage} from './welcome.js';

const app = document.getElementById('app');

function render(page){
    app.append(page);
}

// render(startUpPage());
render(welcomePage())