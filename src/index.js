// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Import component
import App from './App';

// 3) Get a reference to the DIV with the ID root
const el = document.getElementById('root');

// 4) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 5) Show the component on the screen
root.render(<App />);
