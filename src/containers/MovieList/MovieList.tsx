import React from 'react';
import AddMovieForm from "../../components/AddMovieForm/AddMovieForm";
import Movie from "../../components/Movie/Movie";
import {MoviePost} from "../../types";

interface State {
  formValue: string;
  movies: MoviePost[];
}

class MovieList extends React.Component<{}, State> {
  state: State = {
    formValue: '',
    movies: [{id: Math.random(), name: 'Avengers: Endgame'}, {name: 'Back To The Future', id: Math.random()}, {name: 'SpiderMan: No Way Home', id: Math.random()}]
  }

  changeFormValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prev => ({
      ...prev,
      formValue: event.target.value,
    }))
  }

  addMovie = () => {
    const newMovie = {
      id: Math.random(),
      name: this.state.formValue
    }

    this.setState(prev => ({
      ...prev,
      movies: [...this.state.movies, newMovie],
    })
    )
  }

  render() {
    console.log(this.state.movies)
    return (
      <div className="p-4" style={{margin: "0 auto", maxWidth: "700px"}}>
        <AddMovieForm onChange={this.changeFormValue} onAddMovie={this.addMovie}/>
        <div>
          {this.state.movies.map(movie => (
            <Movie key={Math.random()} movie={movie.name}/>
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;