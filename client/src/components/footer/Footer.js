import {Row, Col} from 'react-bootstrap'

function Footer () {
    return (
        <div className='testFooter'>
        <div bg="dark" expand="lg" className="bg-dark mt-5 text-center ">
               
                    <Row className="m-0 p-0 footerContainer pb-3 bg-light testFooter">
                        <Col className='ml-3'>
                        <h5 className='pt-3'>About</h5>
                        <p>Tenner is an online navigation system to find your next freelance programmer. It is a site to help businesses build their next application and programmers to find their next job. With Tenner, we provide the ability to chat amongst each other and agree upon a price. It's easy and quick.  
                            
                        </p>
                        </Col>
                        <Col className='pt-3'>
                        <h5>Socials</h5>
                        <ul className='list-unstyled'>
                            <a href='https://github.com/AngelMond/Tenner' target='_blank' rel='noopener noreferrer' className='text-decoration-none'><li>Github</li></a>
                        </ul>
                        </Col>
                        <Col className='pt-3'>
                        <h5>Quick links</h5>
                        <ul className='list-unstyled'>
                            <li>Sign up</li>
                            <li>Log in</li>
                        </ul>
                        </Col>
                      
                    </Row>
              
        </div>
                </div>
    )
}

export default Footer;

