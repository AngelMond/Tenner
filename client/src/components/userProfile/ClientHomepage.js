import './UserProfile.css';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import Search from '../banner/Search';


// import images
import user1 from '../../images/user-1.jpg';
// import user2 from '../assets/user-2.jpg';
// import user3 from '../assets/user-3.jpg';


export default function ClientHomepage() {

    const cardInfo = [
        {
          image: user1,
          username: "Chris Nunez",
          description: "I will design your website in three days.",
          price: 10,
        },
  
        //start here
      ];

      const renderCard = (card, index) => { 
        return (
          <Container className="col-auto">
            <Card
              style={{ width: "18rem", height: "25rem"}}
              key={index}
              className="shadow-lg m-1 mb-5 text-center"
            >
              <a>
                <Card.Img variant="top" src={card.image} />
              </a>
              <Card.Body>
                <Card.Title className='cardUsername pb-2'>{card.username}</Card.Title>
                <p>{card.description}</p>
                <p className='mb-0'>From</p> <h1 className='mb-0 test'>${card.price}</h1>
              </Card.Body>
            </Card>
          </Container>
        );
      };
    

    return (
        <div>
          <div className="cardContainer text-center">
            <h1 className="">Freelancers</h1>
            <Search />
          </div>
          <div className="d-flex flex-wrap mt-5 container">
            {cardInfo.map(renderCard)}
          </div>
        </div>
      );
}