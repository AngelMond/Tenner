import './UserProfile.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { ME_SUPPLIER } from '../../utils/queries';



// import images
import user1 from '../../images/user-1.jpg';
// import user2 from '../assets/user-2.jpg';
// import user3 from '../assets/user-3.jpg';


export default function DeveloperDashboard() {

  //Get supplier data to create presentation cards
  const { data, loading } = useQuery(ME_SUPPLIER);
  
  //Store array of cards
  let cardInfo; 

  //Store supplier name
  let username;

  if(!loading){
    //Store supplier name
    username = data.meSupplier.username; 
  //Store array of cards
  cardInfo = data.meSupplier.card; 

  }else{
    return <h2>Loading...</h2>
  }
  


  const renderCard = (cardInfo, ix) => {
      return (
        <Container className="col-auto">
          <Card
            style={{ width: "18rem", height: "30rem" }}
            key={ix}
            className="shadow-lg m-1 mb-5 text-center"
          >
            <a>
              <Card.Img variant="top" src={cardInfo.image} />
            </a>
            <Card.Body>
              <Card.Title className='cardUsername pb-2'>{username}</Card.Title>
              <p>{cardInfo.description}</p>
              <p className='mb-0'>From</p> 
              <h1 className='mb-0 test'>${cardInfo.basicPrice}</h1>
              <button className='mt-4 btn btn-danger'>Delete Service</button>
            </Card.Body>
          </Card>
        </Container>
      );
  };

  return (
    <div>
      <div className="cardContainer text-center">
        <h1 className="">Your Dasboard</h1>
        <div className='form-group mt-3'>
          <Link to='/login/developer/description' >
            <button className='btn btn-primary'
              type='button'>
              New service listing +
            </button>
          </Link>
        </div>
      </div>

      <div className="d-flex flex-wrap mt-5 container">
        {cardInfo.map(renderCard)}
      </div>
    </div>

  );
}