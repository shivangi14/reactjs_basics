import React from "react"
import ReactDOM from "react-dom"

function MyInfo(){
  return(
    <div>
    <h1>Shivangi Agarwal</h1>
    <p>Tech enthusiast</p>
    <ol>
      <li>andaman and nicobar</li>
      <li>assam</li>
      <li>himalayas</li>
    </ol>
    </div>
  )
}

ReactDOM.render(<MyInfo />,document.getElementById("root"))

/*
function MyApp(){
    return (
    <ul>
        <li>1</li>
        <li>2</li>
    </ul>
    )
}

ReactDOM.render(
    <MyApp />,
    document.getElementById("root")
    )

*/


/*
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/
