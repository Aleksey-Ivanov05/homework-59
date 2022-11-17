import React from 'react';
interface Props {
  movie: string;
  onNameChange: React.ChangeEventHandler<HTMLInputElement>;
  onDelete: React.MouseEventHandler;
}

class Movie extends React.Component<Props> {
  shouldComponentUpdate(nextProps: Readonly<Props>): boolean {
    return this.props.movie !== nextProps.movie;
  }
  render() {
    return (
      <div className="p-2 my-2 d-flex">
        <input className="border border-1 border-dark p-2 w-100 me-3" value={this.props.movie} onChange={this.props.onNameChange}/>
        <span className="btn-close mt-2" onClick={this.props.onDelete}></span>
      </div>
    );
  }
}

export default Movie;