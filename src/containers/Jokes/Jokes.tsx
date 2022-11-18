import React, {useEffect, useState} from 'react';
import Joke from "./Joke";

const url = 'https://api.chucknorris.io/jokes/random';

const Jokes = () => {
  const [jokes, setJokes] = useState<string[]>([]);
  const fetchData = async () => {
    const promises = [];
    for (let i = 0; i < 5; i++) {
      const response = await fetch(url);
      if (response.ok) {
        const joke = await response.json();
        promises.push(joke['value']);
      }
    }
    setJokes(promises);
  };

  useEffect( () => {
    fetchData().catch(console.error);
  }, [])

  return (
    <>
      <div className="container text-center mt-5">
        <div>
          {jokes.map(joke => (
            <Joke key={Math.random()} joke={joke}/>
          ))}
        </div>
        <button className="btn btn-primary my-3" onClick={fetchData}>Change jokes</button>
      </div>
    </>
  );
};

export default Jokes;