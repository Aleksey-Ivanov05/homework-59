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
    movies: [
      {id: Math.random(), name: 'Avengers: Endgame'},
      {id: Math.random(), name: 'Back To The Future'},
      {id: Math.random(), name: 'SpiderMan: No Way Home'}
    ],
    formValue: '',
  }

  changeFormValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState(prev => ({
      ...prev,
      formValue: event.target.value,
    }))
  }

  addMovie = () => {
    if (this.state.formValue) {
      const newMovie = {
        id: Math.random(),
        name: this.state.formValue
      }

      this.setState(prev => ({
        ...prev,
        movies: [...this.state.movies, newMovie],
      }))
    }
  }

  changeName = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    this.setState(prev => ({
      ...prev,
      movies: this.state.movies.map((movieName) => {
        return id === movieName.id ? {
          ...movieName,
          name: event.target.value
        } : movieName
      }),
    }))
  }

  deleteMovie = (id: number) => {
    const newMovies = [...this.state.movies];
    newMovies.splice(this.state.movies.findIndex(p => p.id === id), 1)
    this.setState(prev => ({
      ...prev,
      movies: newMovies,
    }))
  }

  render() {
    console.log(this.state.movies)
    return (
      <div className="p-4" style={{margin: "0 auto", maxWidth: "700px"}}>
        <AddMovieForm onChange={this.changeFormValue} onAddMovie={this.addMovie}/>
        <div>
          {this.state.movies.map(movie => (
            <Movie key={Math.random()} movie={movie.name} onNameChange={event => this.changeName(event, movie.id)} onDelete={() => this.deleteMovie(movie.id)}/>
          ))}
        </div>
      </div>
    );
  }
}

export default MovieList;