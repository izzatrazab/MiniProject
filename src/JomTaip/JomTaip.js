import { useState } from "react";
import "./JomTaip.css";

var randomWords = require("random-words");
var prewords = randomWords(100);
let num = 60;
let start = false;

export default function JomTaip() {
  const [seconds, setSeconds] = useState(num);
  const [typing, setTyping] = useState("");
  const [counter, setCounter] = useState(0);

  const startcountdown = () => {
    if (start === false) {
      start = true;
      let myInterval = window.setInterval(() => {
        if (num === 0) {
          clearInterval(myInterval);
          return;
        }
        setSeconds(--num);
        console.log(num);
      }, 1000);
    }
    console.log("returnwew");
    return;
  };

  return (
    <div className="App">
      <header className="App-header">JOM TAIP</header>

      <div id="typing">
        <span>
          [WPM: {counter}] {seconds} seconds left
        </span>
        <div id="pre">
          {prewords.map((preword, index) => (
            <span key={"pre" + index.toString()} className="untyped">
              {preword}
            </span>
          ))}
        </div>
        <div id="bottomarea">
          <input
            disabled={seconds === 0}
            autoFocus
            value={typing}
            type="text"
            onKeyUp={!start ? startcountdown : null}
            onChange={(e) => {
              if (e.target.value.charAt(e.target.value.length - 1) === " ") {
                if (typing === prewords[0]) {
                  //correct
                  setCounter((prevCounter) => prevCounter + 1);
                } else {
                  //wrong
                  // setCounter2((prevCounter2) => prevCounter2 + 1);
                }
                prewords.shift();
                setTyping("");
              } else {
                setTyping(e.target.value);
              }
            }}
          />
          <button
            id="reload"
            onClick={() => {
              window.location.reload(false);
            }}
          >
            reload
          </button>
        </div>
      </div>
      <span>still need to style</span>
    </div>
  );
}
