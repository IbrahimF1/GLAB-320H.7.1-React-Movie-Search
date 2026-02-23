import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'
import MovieDisplay from './components/MovieDisplay'

function App() {
  // Constant with your API Key
  const apiKey = "98e3fb1f";

  // State to hold movie data
  const [movie, setMovie] = useState(null);

  // Function to get movies
  const getMovie = async (searchTerm) => {
    // Make fetch request and store the response
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
      );

      // Parse JSON response into a JavaScript object
      const data = await response.json();

      // Set the Movie state to the received data
      setMovie(data);
    } catch (err) {
      console.error(e)
    }
  };

  // This will run on the first render but not on subsquent renders
  useEffect(() => {
    getMovie("Dune");
  }, []);

  return (
    <div className="App">
      <Form moviesearch={getMovie} />
      <MovieDisplay movie={movie} />
    </div>
  )
}

export default App
