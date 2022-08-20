import './ViewProfile.css'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";
import Button from 'react-bootstrap/Button'

// import images



export default function ViewProfile() {
    return(
        <div>
            <div className='userContainer text-center container'>
           {/* <Card.Img className='' src={user3} /> */}
            <h1 className='pt-4'>Monica </h1>
            <h6>I will design your website in three days.</h6>
           </div>
          <Container>
           <Row className='text-center mt-5 priceContainer'>
            <Col style={{ width: "18rem", height: "50rem"}} className="shadow-lg m-1 mb-5 text-center">
            <h1 className='pt-5'>Basic</h1>
            <p className='display-1 pt-3'>$10</p>
            <ul className='pt-4 priceList'>
                <li>Homepage</li>
                <li>This is a test</li>
                <li>This is a test</li>
            </ul>
            <Button variant="success" size="lg" className='button'>Request</Button>
            </Col>
            <Col style={{ width: "18rem", height: "50rem"}} className="shadow-lg m-1 mb-5 text-center">
            <h1 className='pt-5'>Standard</h1>
            <p className='display-1 pt-3'>$25</p>
            <ul className='pt-4 priceList'>
                <li>Homepage</li>
                <li>This is a test</li>
                <li>This is a test</li>
            </ul>
            <Button variant="success" size="lg" className='button'>Request</Button>
            </Col>
            <Col style={{ width: "18rem", height: "50rem"}} className="shadow-lg m-1 mb-5 text-center">
            <h1 className='pt-5'>Premium</h1>
            <p className='display-1 pt-3'>$100</p>
            <ul className='pt-4 priceList'>
                <li>Homepage</li>
                <li>This is a test</li>
                <li>This is a test</li>
            </ul>
            <Button variant="success" size="lg" className='button'>Request</Button>
            </Col>
           </Row>
           </Container>
           <div className='text-center'>
            <h1>Check out my social media</h1>
           </div>

        </div>
    )
}