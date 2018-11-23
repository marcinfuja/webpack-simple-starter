import _ from "lodash";
import './css/style.css';
import logo from './images/logo.png';
import printMe from './test';

function component() {
    const element= document.createElement('div');
    const btn = document.createElement('button');

    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());