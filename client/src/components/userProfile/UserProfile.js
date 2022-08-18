import './UserProfile.css';
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";

// import images
import user1 from '../../images/user-1.jpg';
// import user2 from '../assets/user-2.jpg';
// import user3 from '../assets/user-3.jpg';


export default function UserProfile() {

    const cardInfo = [
        {
          image: "./images/user-2",
          username: "Chris Nunez",
          description: "I will design your website in three days.",
          price: 10,
        },
        {
          image: "./images/user-3",
          username: "Ángel Mondragón",
          description: "I will do mern stack website as mern stack developer",
          price: 12,
        },
        {
          image: "./images/user-4",
          username: "Jessica Smith",
          description: "I will develop responsive front end website with bootstrap",
          price: 15,
        },
        {
          image: "./images/user-5",
          username: "Anica Miller",
          description: "I will use HTML, CSS, ReactJS to create high quality website design",
          price: 13,
        },
        {
          image: "./images/user-6",
          username: "Jorge Cárdenas",
          description: "I will be your website developer in React JS",
          price: 11,
        },
        {
          image: "./images/user-7",
          username: "Anne Johnson",
          description: "I will be your front end web developer using HTML, CSS, JS and Bootstrap.",
          price: 16,
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
          </div>
          <div className="d-flex flex-wrap mt-5 container">
            {cardInfo.map(renderCard)}
          </div>
        </div>
      );
}