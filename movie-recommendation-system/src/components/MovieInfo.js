import React, { useState, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios';

function MovieInfo() {
    let { movie } = useParams();
    const [movies, setMovies] = useState([]);
    const [currMovie, setCurrMovie] = useState(null);
    let url = `http://127.0.0.1:5000/recommend/${movie}`
    useEffect(() => {
        console.log(url);
        axios.get(url).then(async (res) => {
            setMovies(res.data.data);
            console.log(res.data);
            setCurrMovie(res.data.data[0])
        })
    }, [movies])

    return (
        <>
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
                                <h4 className='generes'>{ currMovie?.genres[0].name +", "}{currMovie?.genres[1].name}</h4>
                                <h6 className='tagline'>{currMovie?.tagline}</h6>
                                <h5>Overview</h5>
                                <p className='text-justify'>{currMovie?.overview}</p>
                                <h5> Play Trailer</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 className='d-flex justify-content-center my-3'>Recommended Movies</h2>
            <div className='movie-poster-parent mb-5'>
                 <Link to={`/recommend/${movies[1]?.title}`}><img className='recommended-movie mx-2' src={`https://image.tmdb.org/t/p/original/${movies[1]?.poster_path}`} alt="" /></Link>
                 <Link to={`/recommend/${movies[2]?.title}`}><img className='recommended-movie mx-2' src={`https://image.tmdb.org/t/p/original/${movies[2]?.poster_path}`} alt="" /></Link>
                 <Link to={`/recommend/${movies[3]?.title}`}><img className='recommended-movie mx-2' src={`https://image.tmdb.org/t/p/original/${movies[3]?.poster_path}`} alt="" /></Link>
                 <Link to={`/recommend/${movies[4]?.title}`}><img className='recommended-movie mx-2' src={`https://image.tmdb.org/t/p/original/${movies[4]?.poster_path}`} alt="" /></Link>
                 <Link to={`/recommend/${movies[5]?.title}`}><img className='recommended-movie mx-2' src={`https://image.tmdb.org/t/p/original/${movies[5]?.poster_path}`} alt="" /></Link>
            </div>
        </>
    )
}

export default MovieInfo