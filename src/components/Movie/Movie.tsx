import React from 'react';
interface Props {
  movie: string;
}

class Movie extends React.Component<Props> {
  render() {
    return (
      <div className="p-2 my-2 d-flex">
        <input className="border border-1 border-dark p-2 w-100 me-3" value={this.props.movie}/>
        <span className="btn-close mt-2"></span>
      </div>
    );
  }
}

export default Movie;