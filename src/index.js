// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the DIV with the ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  let message = 'Bye there!';
  const randomNumber = Math.random();

  if (randomNumber > 0.5) {
    message = 'Hello there!';
  }

  return <h1>{`${randomNumber}: ${message}`}</h1>;
}

// 5) Show the component on the screen
root.render(<App />);
