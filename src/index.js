// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the DIV with the ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  const randomNumber = Math.random();
  const minValue = 5;
  const inputType = 'number';
  let message = 'Bye there!';

  if (randomNumber > 0.5) {
    message = 'Hello there!';
  }

  return (
    <div>
      The random number is:
      <h1>{randomNumber}</h1>
      Which means the message is:
      <h2>{message}</h2>
      <input
        type={inputType}
        min={minValue}
        maxLength={5}
        style={{ border: '3px solid red' }}
      />
      <div>
        <input
          maxLength={5}
          spellCheck
          style={{ border: '3px solid green', paddingTop: '20px' }}
        />
      </div>
      <div>
        <textarea className="foobar" autoFocus />
      </div>
    </div>
  );
}

// 5) Show the component on the screen
root.render(<App />);
