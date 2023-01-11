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
          placeholder="Your Name"
          style={{ border: '3px solid green', paddingTop: '20px' }}
        />
      </div>
      <div>
        <textarea className="foobar" autoFocus />
      </div>
    </div>
  );
}

export default App;
