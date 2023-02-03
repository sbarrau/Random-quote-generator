import './App.css';
import React, { useState, useEffect } from 'react';


function App() {

const [loading, setLoading] = useState(true);
const [count, setCount] = useState(Math.floor(Math.random() * 1640));
const [quotes, setQuotes] = useState([{
  text: "Confidence is the food of the wise man, but the liquor of the fool.",
  author:"Barrau Sebastián"
  }]);

const counter= () =>{
  if (count!==1640){
    setCount(count +1)
  }
  if (count>= 1640){
    setCount(0)
  }
  if (col!==11){
    setCol(col +1)
  }
  if (col>= 11){
    setCol(0)
  }
};

  var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

  const [col, setCol] = useState(0);

  useEffect(()=> {
    fetch("https://type.fit/api/quotes")
    .then((res) => {
    return res.json();
    })
    .then( (json) => {
    setQuotes(json)
    setLoading(false)
    })
    .catch((err) => console.error(err))
  }, [])

  if (loading){
    return <h1>Loading...</h1>
  }

  return (
  <div id='fondo' style={{ backgroundColor:  colors[col] }}>
  <div id="quote-box"  >
  <h1 id="text" style={{ color:  colors[col] }} > "{quotes[count].text}" </h1>
  <h3 id="author" style={{ color:  colors[col] }}> -{quotes[count].author}</h3>
  <div id='low-section' >
  <a className="button" id="tweet-quote" title="Tweet this quote!" target="_top" href="twitter.com/intent/tweet"
  style={{ backgroundColor:  colors[col] }}>
    <i className="fa fa-twitter"  ></i>
  </a>
  <button id="new-quote" onClick={ counter } style={{ backgroundColor:  colors[col] }}>New quote</button>
  </div>
  </div>
  </div>
  );
}

export default App;
