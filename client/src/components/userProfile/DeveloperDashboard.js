import './UserProfile.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { ME_SUPPLIER } from '../../utils/queries';
import { REMOVE_CARD } from '../../utils/mutations';
import Auth from '../../utils/auth';



// import images
import user1 from '../../images/user-1.jpg';
// import user2 from '../assets/user-2.jpg';
// import user3 from '../assets/user-3.jpg';


export default function DeveloperDashboard() {

  //Get supplier data to create presentation cards
  const { data, loading } = useQuery(ME_SUPPLIER);

  // remove card from supplier
  const [deleteCard, {error}] = useMutation(REMOVE_CARD);
  
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

  
  const handleDeleteCard = async (_id) => {

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const {data} = await deleteCard({
        variables: {input: {_id}}
      });
      
      if (!data) {
        throw new Error('something went wrong!');
      }
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
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
        {cardInfo.map((card, index)=>{
          return (
            <Container className="col-auto">
              <Card
                style={{ width: "18rem", height: "30rem" }}
                key={index}
                className="shadow-lg m-1 mb-5 text-center"
              >
                
                  <Card.Img variant="top" src={card.image} />
                
                <Card.Body>
                  <Card.Title className='cardUsername pb-2'>{username}</Card.Title>
                  <p>{card.description}</p>
                  <p className='mb-0'>From</p> 
                  <h1 className='mb-0 test'>${card.basicPrice}</h1>
                  <button className='mt-4 btn btn-danger' onClick={()=>handleDeleteCard(card._id)}>Delete Service</button>
                </Card.Body>
              </Card>
            </Container>
          );
        })}
      </div>
    </div>

  );
}