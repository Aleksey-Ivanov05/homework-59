import React from 'react';

class AddMovieForm extends React.Component {
  render() {
    return (
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter your movie"/>
        <button className="btn btn-outline-secondary" type="button">Add</button>
      </div>
    );
  }
}

export default AddMovieForm;