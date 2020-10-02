import React, { useState } from 'react';
import axios from 'axios';

import Search from './components/Search.js';
import Results from './components/Result.js';
import ButtonFilm from './components/ButtonFilm.js';
import ButtonSerie from './components/ButtonSerie.js';
//import apiUrl from './constant/apikey.js'

function App() {
  const [state, setState] = useState({
    s: "",
    type:"",
    results: [],
    selected: {}
  });
  const apiUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=dc7da4ff";

  const envSearch = (e) => {
    if (e.key === "Enter") {
      axios(apiUrl + "&type=" + state.type  + "&s=" + state.s).then(({data})=> {
        let results = data.Search;
        console.log(data, "string de busca")

        setState(prevState => {
          return { ...prevState, results: results}
        })
      })
    }
  } 

  const hinput = (e) => {
    let s = e.target.value;

    setState(prevState => {
      return { ...prevState, s: s}
    });
  }
  const buttfil = () => {
    let type = "movie";
    console.log("botao filme")

    setState(prevState => {
      return { ...prevState, type: type}
    });
  }

  const buttserie= (e) => {
    let type = "series";
    console.log("botao serie")

    setState(prevState => {
      return { ...prevState, type: type}
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Consulta filmes OMDB</h1>
      </header>
      <main>
          <ButtonFilm buttfil={buttfil}/>

          <ButtonSerie buttserie={buttserie}/>
          <Search hinput={hinput} envSearch={envSearch}/>
       
          <Results results={state.results}/>

      </main>
    </div>
  );
}

export default App;
