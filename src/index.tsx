import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {splitintoWords} from "./01-hello-tests/01";
import * as serviceWorker from './01-hello-tests/01';

const sentense= "Hello my friend!";
const result = splitintoWords(sentense)
console.log (result[0] ==="hello")
console.log(result[1] ==="my")
console.log(result[2] ==="friend")

ReactDOM.render(
    <div>
        <App/>

    </div>
    , document.getElementById('root')
);