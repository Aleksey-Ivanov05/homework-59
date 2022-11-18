import React from 'react';
import MovieList from "./containers/MovieList/MovieList";
import Jokes from "./containers/Jokes/Jokes";


function App() {
  return (
    <div className="App">
      <MovieList/>
      <hr/>
      <Jokes/>
    </div>
  );
}

export default App;
