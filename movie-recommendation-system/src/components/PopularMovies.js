import React, { useState, useEffect } from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios';

function PopularMovies() {
    const [movies, setMovies] = useState([]);
    let [isloading, setisloading] = useState(true);
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=2144c30ff91ce4ad919d206c68ffe29c`
    useEffect(() => {
        console.log(url);
        axios.get(url).then(async (res) => {
            setMovies(res.data.results);
            // console.log(res.data);
            setisloading(false)
        })
    }, [url])

    return (
        <> {
            isloading ? <> <div className="loader">
            <div>Almost there please wait...</div>
            <img  src="/loader.gif" alt="" /></div> </> :
            <div className='container'>
            <h2 className='d-flex justify-content-center my-3'>Recent Most Popular Movies</h2>
            <div className='row'>
                {
                movies?.map(function (movie,key){
                return (
                    <Link className='col-sm-3 mb-4 d-flex justify-content-center' key = {key} to={`/movie/${movie.title}`}><img className='recommended-movie' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt="" /></Link>
                )})
                }
                </div>
                </div>
            }
        </>
    )
}

export default PopularMovies