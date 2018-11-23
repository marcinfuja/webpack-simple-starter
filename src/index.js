import _ from "lodash";
import './css/style.css';

function component() {
    const element = document.createElement('div');
    element.classList.add('red')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());