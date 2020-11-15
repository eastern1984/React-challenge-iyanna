import React from 'react';
import 'fontsource-roboto';
import './App.css';
import Main from "./components/Main";
import LayoutComp from "./hoc/Layout/LayoutComp";

function App() {
  return (
        <div className="App">
          <LayoutComp>
            <Main />
          </LayoutComp>
        </div>
  );
}

export default App;
