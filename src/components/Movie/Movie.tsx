import React from 'react';
interface Props {
  movie: string;
  onNameChange: React.ChangeEventHandler<HTMLInputElement>;
  onDelete: React.MouseEventHandler;
}

class Movie extends React.Component<Props> {

  componentDidMount() {
    console.log('[Movie] DidMount');
  }

  componentDidUpdate() {
    console.log('[Movie] DidUpdate');
  }

  shouldComponentUpdate(nextProps: Props): boolean {
    console.log('[Movie] ShouldComponent')
    return nextProps.movie !== this.props.movie;
  }

  render() {
    console.log('[Movie] render');
    return (
      <div className="p-2 my-2 d-flex">
        <input className="border border-1 border-dark p-2 w-100 me-3" value={this.props.movie} onChange={this.props.onNameChange}/>
        <span className="btn-close mt-2" onClick={this.props.onDelete}></span>
      </div>
    );
  }
}

export default Movie;