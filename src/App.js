import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import useState from "react"


export default function App() {
  const [curImgs, setImg] = useState([]);
  //let img = ""
  let arr = [];
  (async () =>{
    let img = await fetch("http://localhost:4000/").then(result => result.text()).then(res => arr.push(res));
    // setImg([...curImgs, img]);
    // console.log(curImgs)
  })()

  // async function getPoster(){
  //   //
  //   let res = await axios.get("http:localhost:4000/");
  //   console.log(3)
  //   let img = res.data;
  //   console.log(res);
  // }
  // getPoster();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <img src={arr[0]} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
