import React from 'react';

class Movie extends React.Component {
  render() {
    return (
      <div className="p-2 my-2 d-flex justify-content-between">
        <input className="border border-1 border-dark p-2 w-100 me-3" value="Movie name"/>
        <span className="btn-close mt-2"></span>
      </div>
    );
  }
}

export default Movie;