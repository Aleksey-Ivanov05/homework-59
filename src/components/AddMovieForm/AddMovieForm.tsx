import React from 'react';

interface Props {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onAddMovie: React.MouseEventHandler;
}

class AddMovieForm extends React.Component<Props, {}> {
  render() {
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter your movie" onChange={this.props.onChange}/>
        <button className="btn btn-outline-secondary" type="button" onClick={this.props.onAddMovie}>Add</button>
      </div>
    );
  }
}

export default AddMovieForm;