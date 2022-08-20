import React from 'react';
import Search from './Search';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { Link } from 'react-router-dom';
import Footer from '../footer/Footer'

import { SUPPLIERS } from '../../utils/queries';
import { useQuery } from '@apollo/client';
import Button from 'react-bootstrap/Button'



export default function Banner() {


  const {data, loading} = useQuery(SUPPLIERS);

  let allSuppliers;

  if (!loading) {
    allSuppliers = data.suppliers;
  } else {
    return <h2>Loading...</h2>
  }


  const renderAllSuppliers = (supplier, index)=>{

   return supplier.card.map((card, index)=> {

      return (
        <Container className="col-auto">
          <Card
            style={{ width: "18rem", height: "25rem" }}
            key={card._id}
            className="shadow-lg m-1 mb-5 text-center"
          >
              <Card.Img variant="top" src={card.image} alt="context img"/>
            <Card.Body>
              <Card.Title className='cardUsername pb-2'>{supplier.username}</Card.Title>
              <p>{card.description}</p>
              <p className='mb-0'>From</p> <h1 className='mb-0 test'>${card.basicPrice}</h1>
            </Card.Body>
          </Card>
        </Container>
      );
    })

  };

  return (
    <div id='banner' className='container-fluid p-0'>
      <div id='wrap' className='row d-flex d-wrap align-items-center p-3'>
        <header id='header' className='p-2'>
          <h1 className='col-12 text-center display-1 fw-bold p-2'>Tenner</h1>
          <p className='col-12 text-center p-2 display-4'>Find your Next programmer.</p>
          {/* Search Input global container*/}
          <div className='row justify-content-center mt-5'>
            <div className='search-input-container d-flex border border-muted rounded col-auto p-0 align-items-center ps-2'>
              <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' className='bi bi-search' viewBox='0 0 16 16'>
                <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
              </svg>
              <Search />
            </div>
          </div>
        </header>
      </div>
      <div className='mt-5 text-center p-5 slogan bg-light'>
        <h1>Search and hire</h1>
        <h2 className='mt-5'>Tenner is one of the best solutions to find your next developer online.</h2>
      </div>
      <div className='text-center mt-5'>
        <h1>Meet your developers</h1>
      </div>
      <div>
        <div className="d-flex flex-wrap mt-5 container">
          {/* {Render all cardSuppliers} */}
          {allSuppliers.map(renderAllSuppliers)}
        </div>
      </div>
      <div id='bottomImage' className='container-fluid text-center shadow-lg'>
        
          <Card style={{width: '18rem'}} id='imageText'>
          <Card.Body>
            <Card.Title>Get Started Today!</Card.Title>
            <Button className='mt-3'><Link to='/signup' className='text-white text-decoration-none' id='linktoSignup'>Sign up</Link></Button>
          </Card.Body>
          </Card>
       
      </div>
     <Footer />
    </div>
  )
};