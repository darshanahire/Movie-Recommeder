import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import SelectSearch from 'react-select-search';
import 'react-select-search/style.css'

function Home() {
    const [options,setOptions] = useState([]);
    const [movieName,setMovieName] = useState("");
    let url = `http://127.0.0.1:5000/getmovienames`
    useEffect(() => {
        console.log(url);
        axios.get(url).then(async (res) => {
            // setMovies(res.data?.data?.slice(1, 6));
            // if(res.data.data != null) setCurrMovie(res.data.data[0]);
            // setisloading(false);
            var ops = [];
            // res.forEach((elem)=>{
            //   ops.append({'value' : elem})
            // })
            // setOptions(res.data)
            console.log(res.data.title);
            
        })
    }, [])


  
  return (
    <>
    <div className='container'>
        <h1 className='d-flex justify-content-center mt-3'>
            Welcome to The Movie Recommender
        </h1>
        <SelectSearch options={options}   placeholder="Search country"
  search/>
        <Form className='d-flex justify content center my-5'>
                <Form.Control
                type="text"
                placeholder="Enter Movie Name"
                className="mr-2"
                onChange={(e)=>{setMovieName(e.target.value)}}
                />
                <Link to={`recommend/${movieName}`} class="btn btn-primary">Recommend</Link>
        </Form>
    </div>
    
      </>
  )
}

export default Home