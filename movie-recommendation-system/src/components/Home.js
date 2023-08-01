import React, { useState } from 'react'
import { Link } from "react-router-dom";
import AsyncSelect from 'react-select/async';
import colourOptions from './data.json';

function Home() {
  const [selectedOption, setSelectedOption] = useState(null);

  const filterColors = (inputValue) => {
    return colourOptions.filter((i) =>
      i.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  };

  const loadOptions = (inputValue, callback) => {
    setTimeout(() => {
      callback(filterColors(inputValue));
    }, 1000);
  };

  return (
    <>
      <div className='container h-90'>
        <h1 className='d-flex align-items-center justify-content-center mt-3'>
          Welcome to The Movie Recommender
        </h1>
        <div className='d-flex flex-column flex-md-row justify-content-center mt-5'>
          <AsyncSelect className='selector' cacheOptions loadOptions={loadOptions} defaultOptions onChange={setSelectedOption} placeholder="Search movie..." />
          <Link to={`recommend/${selectedOption?.value}`} class="ml-md-3 mt-3 mt-md-0 btn btn-primary">Recommend Releted Movies</Link>
        </div>
        <div className='mt-5 d-flex justify-content-center'> 
        <img className='imgg-mobile d-md-none' src="https://image.tmdb.org/t/p/original//8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"
          alt="" /> 
        <img className='imgg d-md-block d-none' src="https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/xcXALwBjdHIjrESpGVhghqj8fGT.jpg"
          alt="" /> 
          </div>
      </div>

    </>
  )
}

export default Home