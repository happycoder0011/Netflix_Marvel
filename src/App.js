import React from 'react';
import './App.css';
import Row from "./Row";
import requests from "./requests";
import Banner from './Banner';
function App() {

  return (
    <div className="App">
      <Banner />
      <Row title="characters" fetchUrl={requests.fetchtcharacters} />
      <Row title="Comics" fetchUrl={requests.fetchcomics} />
      <Row title="Series" fetchUrl={requests.fetchseries} />
      <Row title="Hulk Comics" fetchUrl={requests.fetchhulk} />
      <Row title="Avengers Comics" fetchUrl={requests.fetchavengers} />
      <Row title="X MEN" fetchUrl={requests.fetchinteriorstory} />
      <Row title="Adam Warlock" fetchUrl={requests.fetchadam} />




    </div>
  );
}

export default App;
