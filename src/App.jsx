import { useState, useEffect } from "react";
import "./App.css";

function App() {

  const API = "50bcb870";

  const [search, setSearch] = useState("naruto");
  const [movies, setMovies] = useState([]);
  const [selected, setSelected] = useState(null);


  /* Load Movies First Time */

  useEffect(() => {

    loadMovies("naruto");

  }, []);



  function loadMovies(name) {

    fetch(`https://www.omdbapi.com/?apikey=${API}&s=${name}`)

      .then(res => res.json())

      .then(data => {

        setMovies(data.Search || []);

      });

  }



  /* Search */

  function searchMovies() {

    loadMovies(search);

  }



  /* Movie Click */

  function openMovie(id) {

    fetch(`https://www.omdbapi.com/?apikey=${API}&i=${id}&plot=full`)

      .then(res => res.json())

      .then(data => {

        setSelected(data);

      });

  }



  return (

    <div className="app">


      <h1 className="title">

        RITOZY Movie App 🎬

      </h1>


      <div className="searchBox">

        <input

          value={search}

          onChange={(e) => setSearch(e.target.value)}

          placeholder="Search movie..."

        />

        <button onClick={searchMovies}>
          Search
        </button>

      </div>



      <div className="movies">

        {movies.map((m) => (
          <div

            className="card"

            key={m.imdbID}

            onClick={() => openMovie(m.imdbID)}

          >

            <img src={m.Poster} />

            <p>{m.Title}</p>

          </div>
        ))}

      </div>



      {/* POPUP */}

      {selected && (

        <div className="popup">

          <div className="popupBox">

            <button

              className="close"

              onClick={() => setSelected(null)}

            >

              X

            </button>


            <img src={selected.Poster} />

            <h2>{selected.Title}</h2>

            <p>{selected.Year}</p>

            <p>{selected.Plot}</p>

          </div>

        </div>

      )}



    </div>

  );

}

export default App;