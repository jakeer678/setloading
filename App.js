import React, { useState } from "react";

import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  // const getMovies = () => {
  //   fetch('https://swapi.dev/api/films/').then((response)=>{
  //     return response.json();
  //   }).then((data)=>{
  //     const trasformedmovies = data.results.map((item)=>{
  //       return {
  //         id:item.episode_id,
  //         title:item.title,
  //         text:item.opening_text
  //       }
  //     })
  //     setMovies(trasformedmovies)
  //   })
  // }



  async function getMovies() {
    setLoading(true)
    const respose = await fetch("https://swapi.dev/api/films/");
    const data = await respose.json();

    const trasformedmovies = data.results.map((item) => {
      return {
        id: item.episode_id,
        title: item.title,
        text: item.opening_crawl,
      };
    });
    setMovies(trasformedmovies);
    setLoading(false)
  }
  console.log(movies, "iiiiii");
  return (
    <React.Fragment>
      <section>
        <button onClick={getMovies}>Fetch Movies</button>
      </section>
      <section>
       {!loading && <MoviesList movies={movies} />}
        {loading && <p>....Loading</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
