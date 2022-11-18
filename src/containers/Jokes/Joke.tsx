import React from 'react';

interface Props {
  joke: string;
}

const Joke: React.FC<Props> = ({joke}) => {
  return (
    <div className="border border-1 border-dark p-3 mb-4">{joke}</div>
  );
};

export default Joke;