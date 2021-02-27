import "./App.css";
import React from "react";
import InputTask from "./InputTask";

class App extends React.Component {
  render() {
    // Any elements that need to be returned must be in a wrapper element like a <div> </div>
    return (
      <div className="app">
        <header className="header">
          <h1>TO-DO LIST</h1>
        </header>
        <main className="content">
          <InputTask />
          <div className="grid">
            <div className="active">
              <h1>Active</h1>
            </div>
            <div className="completed">
              <h1>Completed</h1>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

/*
  You can create functional components as well
  
  function App() {

  }
  
*/

export default App;
