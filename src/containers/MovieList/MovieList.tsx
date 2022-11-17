import React from 'react';
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import Movie from "../../components/Movie/Movie";

class MovieList extends React.Component {
  render() {
    return (
      <div className="p-4" style={{margin: "0 auto", maxWidth: "700px"}}>
        <AddMovieForm/>
        <div>
          <Movie/>
          <Movie/>
          <Movie/>
        </div>
      </div>
    );
  }
}

export default MovieList;