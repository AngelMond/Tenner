import React, { useEffect, useState } from 'react';
import Search from './Search';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { Link } from 'react-router-dom';
import { render } from 'react-dom';
import { Image } from 'react-bootstrap';
import { SUPPLIERS } from '../../utils/queries';
import { useQuery } from '@apollo/client';

// all user images
import user1 from '../../images/user-1.jpg';
import user2 from '../../images/user-2.jpg';
import user3 from '../../images/user-3.jpg';
import user4 from '../../images/user-4.jpg';
import user5 from '../../images/user-5.jpg';
import user6 from '../../images/user-6.jpg';
import user7 from '../../images/user-7.jpg';
import user8 from '../../images/user-8.jpg';



export default function Banner() {


  {/* ESTE CODIGO ESTA ROMPIENDO EL RESPONSIVE */}
  // var background = { backgroundSize: 'cover' };
  // var textStyle = {
  //   position: 'absolute',
  //   top: '80%',
  //   left: '50%'
  // }

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

  // const cardInfo = [

  //   {
  //     image: user2,
  //     username: "Sylvestor Stalone",
  //     description: "I will design your website in three days.",
  //     price: 60,
  //   },
  //   {
  //     image: user3,
  //     username: "Robin Buckley",
  //     description: "I will design your website in three days.",
  //     price: 20,
  //   },
  //   {
  //     image: user4,
  //     username: "Chrissy Cunningham",
  //     description: "Developer lead. Always gets the work done right.",
  //     price: 60,
  //   },
  //   {
  //     image: user5,
  //     username: "Steve Harrington",
  //     description: "Just graduated a coding bootcamp. Excited to be onboard!",
  //     price: 10,
  //   },
  //   {
  //     image: user6,
  //     username: "Max Mayfield",
  //     description: "Your best back-end developer yet!",
  //     price: 40,
  //   },
  //   {
  //     image: user7,
  //     username: "Thomas Gonzalez",
  //     description: "Family man. Love to code and get your project to your expectations.",
  //     price: 30,
  //   },
  //   {
  //     image: user8,
  //     username: "Sam Adams",
  //     description: "Expert Developer. Project within days!",
  //     price: 50,
  //   },

  // ];
  // const renderCard = (card, index) => {


  //   return (
  //     <Container className="col-auto">
  //       <Card
  //         style={{ width: "18rem", height: "25rem" }}
  //         key={index}
  //         className="shadow-lg m-1 mb-5 text-center"
  //       >
  //         <a>
  //           <Card.Img variant="top" src={card.image} />
  //         </a>
  //         <Card.Body>
  //           <Card.Title className='cardUsername pb-2'>{card.username}</Card.Title>
  //           <p>{card.description}</p>
  //           <p className='mb-0'>From</p> <h1 className='mb-0 test'>${card.price}</h1>
  //         </Card.Body>
  //       </Card>
  //     </Container>
  //   );
  // }

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
          {/* {cardInfo.map(renderCard)} */}
          {allSuppliers.map(renderAllSuppliers)}
        </div>
      </div>

      {/* ESTE CODIGO ESTA ROMPIENDO EL RESPONSIVE */}
      {/* <div className='test'>
        <Image
          style={background} responsive
          src="http://www.milkbardigital.com.au/wp-content/uploads/2015/11/Milkbar-Home-Background.jpg">
        </Image>
        <h1 style={textStyle}></h1>
      </div> */}
    </div>
  )
};