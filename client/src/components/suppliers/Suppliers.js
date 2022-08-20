import React from 'react';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";


import { SUPPLIERS } from '../../utils/queries';
import { useQuery } from '@apollo/client';



export default function Suppliers() {


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
            style={{ width: "18rem", height: "30rem" }}
            key={card._id}
            className="shadow-lg m-1 mb-5 text-center"
          >
              <Card.Img variant="top" src={card.image} alt="context img"/>
            <Card.Body>
              <Card.Title className='cardUsername pb-2'>{supplier.username}</Card.Title>
              <p>{card.description}</p>
              <p className='mb-0'>From</p> <h1 className='mb-0 test'>${card.basicPrice}</h1>
              <button className='mt-4 btn btn-success'>Add Service</button>
            </Card.Body>
          </Card>
        </Container>
      );
    })

  };

  return (
        <div className="container d-flex flex-wrap client-suppliers-view">
          {/* {Render all cardSuppliers} */}
          {allSuppliers.map(renderAllSuppliers)}
        </div> 
  )
};