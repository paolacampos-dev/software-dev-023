// NOTE: This file won't work, you can;t have multiple functions with the same name, its just so you can see the different examples!

// this is how we did it in the olden days
// document.querySelector("button").addEventListener("click", myFunction)

// With Event handler
function App() {
  // this function is the event handler
  function handleClick() {
    console.log("I was clicked!");
  }

  return (
    <>
      <h1>Event Handler</h1>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
}

// Inline events
function App() {
  return (
    <>
      <h1>Inline events</h1>
      <button onClick={() => console.log("I was clicked!")}>Arrow</button>

      <button
        onClick={function () {
          console.log("I was clicked!");
        }}
      >
        Function
      </button>
    </>
  );
}

// With paramters in the handler
function App() {
  // event handler with parameters
  function handleClick(username) {
    console.log(`Hello ${username}`);
  }

  return (
    <>
      <h1>Handler with parameters</h1>
      <button onClick={() => handleClick("Bertie")}>Greet Bertie</button>
      <button onClick={() => handleClick("Manny")}>Greet Manny</button>

      <button
        onClick={function () {
          handleClick("Tim");
        }}
      >
        Greet Tim
      </button>
    </>
  );
}
export default App;
