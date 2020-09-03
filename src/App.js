import React from 'react';
import './App.css';
import Row from "./Row";
import requests from "./requests";

function App() {
  
  return (
    <div className="App">
     <Row title="characters" fetchUrl={requests.fetchtcharacters}/> 
     <Row title="Comics" fetchUrl={requests.fetchcomics}/>
     
     
     
    </div>
  );
}

export default App;
