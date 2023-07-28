import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Home() {
    const [movieName,setMovieName] = useState("");

  return (
    <>
    <div className='container'>
        <h1 className='d-flex justify-content-center mt-3'>
            Welcome to The Movie Recommender
        </h1>
        <Form className='my-5'>
            <Row>
            <Col xs="auto">
                <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e)=>{setMovieName(e.target.value)}}
                />
            </Col>
            <Col xs="auto">
                <Link to={`recommend/${movieName}`}>Submit</Link>
            </Col>
            </Row>
        </Form>
    </div>
      </>
  )
}

export default Home