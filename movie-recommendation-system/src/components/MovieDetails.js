import React, { useState, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios';

function MovieDetails() {
    let { movie } = useParams();
    const [movies, setMovies] = useState([]);
    let [isloading, setisloading] = useState(true);
    const [currMovie, setCurrMovie] = useState(null);
    let url = `https://api.themoviedb.org/3/search/movie?api_key=2144c30ff91ce4ad919d206c68ffe29c&query=${movie.replaceAll(' ', '+').toLowerCase()}`
    useEffect(() => {
        console.log(url);
        axios.get(url).then(async (res) => {
            setCurrMovie(res.data?.results[0])
            setMovies(res.data?.results?.slice(1, 6))  
            setisloading(false)          
        })
    }, [url])

    return (
        <> {
            isloading ? <> <div className="loader">
            <div>Almost there please wait...</div>
            <img  src="/loader.gif" alt="" /></div></> : <>
            <div className='backdrop-poster p-0' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${currMovie?.backdrop_path})` }}>
                <div className="backdrop-poster-bg d-flex justify-content-center">
                    <div className='parent-container d-md-flex'>
                        <div className='movie-poster-parent mt-5'>
                            <img className='movie-poster' src={`https://image.tmdb.org/t/p/original/${currMovie?.poster_path}`} alt="" />
                        </div>
                        <div className="movie-details-parent ml-md-5 mx-3">
                            <div className='movie-details'>
                                <h1 className='movie-name bold'>{currMovie?.title}</h1>
                                <h4 className='relese-date'>{"Relesed on : "+currMovie?.release_date}</h4>
                                <h4 className='duration'>{" Duration : " + Math.floor(currMovie?.runtime / 60) +"h " + currMovie?.runtime % 60 +"m"}</h4>
                                {/* <h4 className='generes'>{ currMovie?.genres[0].name +", "}{currMovie?.genres[1].name}</h4> */}
                                <h6 className='tagline'>{currMovie?.tagline}</h6>
                                <h5>Overview</h5>
                                <p className='text-justify'>{currMovie?.overview}</p>
                                <h5> Play Trailer</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='d-flex justify-content-center my-3'>{movies.length ? 'Recommended Movies' : 'No Recommendation Found'}</h2>
            <div className='reconded-movie-poster-parent mb-5 justify-content-md-center'>
            {
                movies?.map(function (movie,key){
                return (
                    <Link key = {key} to={`/movie/${movie.title}`}><img className='recommended-movie mx-2' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt="Not Found" /></Link>
                )})
            }
            </div>
        </>
        }
        </>
    )
}

export default MovieDetails