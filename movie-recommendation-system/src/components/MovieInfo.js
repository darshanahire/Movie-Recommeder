import React, { useState, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'
import axios from 'axios';

function MovieInfo() {    
    let [isloading, setisloading] = useState(true);
    let { movie } = useParams();
    const [movies, setMovies] = useState([]);
    const [currMovie, setCurrMovie] = useState(null);
    let url = `/recommend/${movie}`
    // let url = `http://127.0.0.1:5000/recommend/${movie}`
    // let url = `http://192.168.43.211/recommend/${movie}`
    useEffect(() => {
        axios.get(url).then(async (res) => {
            setMovies(res.data?.data?.slice(1, 6));
            if(res.data.data != null) setCurrMovie(res.data.data[0]);
            setisloading(false);
            // console.log(res.data.data[0]);
        })
    }, [url])

    return (
        <>{isloading ? <> <div className="loader">
            <div>Almost there please wait...</div>
            <img  src="/loader.gif" alt="" /></div></> : movies ?  <>
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
                                <h4 className='generes'>{ currMovie?.genres[0].name +", "}{currMovie?.genres[1]?.name}</h4>
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
            <div className='reconded-movie-poster-parent mb-5 justify-content-md-center'>
            {
                movies?.map(function (movie,key){
                return (
                    <Link onClick={()=>{setisloading(true)}} key = {key} to={`/recommend/${movie?.title}`}><img className='recommended-movie mx-2' src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`} alt="Not Found" /></Link>
                )})
            }
            </div>
            </>
          : <div className='d-flex justify-content-center my-3'><h2>Movie Not Found </h2> <Link className='btn' to="/">Go Back</Link></div>}
          </>
    )
}

export default MovieInfo