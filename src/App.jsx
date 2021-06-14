import logo from "./logo.svg";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Card from "./components/Card";
import React, { useState, useEffect } from "react";

function App() {
  const [beers, updateBeers] = useState([]);
  // prevents the function from running on load and getting stuck into an infinite loop
  useEffect(() => {
    const api_Url = "https://api.punkapi.com/v2/beers";
    fetch(api_Url)
      .then((response) => {
        return response.json();
      })
      .then((jsonResponse) => updateBeers(jsonResponse));
  }, []);
  // [] -> only want to run this once
  // const handleSearch = (searchTerm) => {
  // 1. get ALL the beers - fetch
  // 2.find the right matching beers
  // filter through the data and find relevant ones
  // Show the beers on the page by passing them down as props to Card
  return (
    <div className="App">
      <h1>Best Beers</h1>
      <SearchBar />
      <Card beerCard={beers} />
    </div>
  );
}

export default App;
