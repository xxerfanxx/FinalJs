import Navigo from 'navigo';

const app = document.getElementById('app');

function render(page){
    app.innerHTML = '';
    app.append(page);
}


export var router = new Navigo('/');

router
.on('/loading',async function () {
    const {startUpPage} = await import('./loading.js');
    render(startUpPage())
  })
  .on('/welcome',async function () {
    const {welcomePage} = await import('./welcome.js');
    render(welcomePage())
  })
  .on('/obsp1',async function () {
    const {obsPage1} = await import('./onBoardScrollPage1.js');
    render(obsPage1())
  })
  .on('/obsp2',async function () {
    const {obsPage2} = await import('./onBoardScrollPage2.js');
    render(obsPage2())
  })
  .on('/obsp3',async function () {
    const {obsPage3} = await import('./onBoardScrollPage3.js');
    render(obsPage3())
  })
  .on(`/login`,async function () {
    const {loginPage} = await import('./login.js');
    render(loginPage())
  })
  .on(`/home`,async function () {
    const {homePage} = await import('./homePage.js');
    render(homePage())
  })
  .resolve();

  router
  .on('/product/:id', async (params) =>{
    const { productPage } = await import ('./productPage.js')
    render(productPage(params.data.id));
  })
  .resolve();