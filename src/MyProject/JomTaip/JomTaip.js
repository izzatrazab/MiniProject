import { useState } from "react";
import "./JomTaip.css";

var randomWords = require("random-words");
var prewords = randomWords(100);
let num = 60;
let start = false;
let index = 0;
let preheight = 0;

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
    <div>
      <header className="jomtaip-header">JOM TAIP</header>

      <div id="typing">
        <span>
          [WPM: {counter}] {seconds} seconds left
        </span>
        <div id="word_box">
          <div id="pre">
            {prewords.map((preword, index) => {
              return (
                <span
                  id={"word" + index.toString()}
                  key={"pre" + index.toString()}
                  className="untyped"
                >
                  {preword}
                </span>
              );
            })}
          </div>
        </div>

        <div id="bottomarea">
          <input
            disabled={seconds === 0}
            autoFocus
            value={typing}
            type="text"
            onKeyUp={!start ? startcountdown : null}
            onChange={(e) => {
              let tempdoc = document.getElementById("word" + index);

              console.log("here" + tempdoc.offsetTop);
              tempdoc.style.backgroundColor = "rgba(255,255,255,0.1)";
              if (prewords[index].indexOf(e.target.value) === -1) {
                tempdoc.style.color = "rgb(255, 67, 67)";
              } else {
                tempdoc.style.color = "inherit";
              }
              if (e.target.value.charAt(e.target.value.length - 1) === " ") {
                if (typing === prewords[index]) {
                  //correct
                  setCounter((prevCounter) => prevCounter + 1);
                  tempdoc.style.color = "rgb(16, 204, 57)";
                } else {
                  //wrong
                  // setCounter2((prevCounter2) => prevCounter2 + 1);
                }
                // prewords.shift();
                tempdoc.style.backgroundColor = "";
                index += 1;
                setTyping("");
                let temppostword = document.getElementById("word" + index);
                if (preheight < temppostword.offsetTop) {
                  preheight = temppostword.offsetTop;
                  document.getElementById("pre").style.top =
                    "-" + preheight + "px";
                }
              } else {
                setTyping(e.target.value);
              }
            }}
          />
          <button
            onMouseEnter={(e) => {e.target.style.backgroundColor = 'rgb(8, 123, 151)'}}
            onMouseLeave={(e) => {e.target.style.backgroundColor = 'rgb(19, 146, 250)'}}
            id="reload"
            onClick={() => {
              window.location.reload(false);
            }}
          >
            &#x27F3;
          </button>
        </div>
        <span>ongoing</span>
        <span>1) use the correct method of calculating WPM</span>
        <span>2) word choice must extra random</span>
        <span>3) add difficulty level</span>
         
      </div>
    </div>
  );
}
