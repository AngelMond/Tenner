import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./cardDescriptionForm.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import InputGroup from "react-bootstrap/InputGroup";

export default function CardDescription() {

  return (
    <div className="cardContainer col-auto">
      <div className="text-center">
        <h1 className="contact-title ">Make your profile</h1>
      </div>
      {/* Name input */}
      <div className="mt-5">
        <Form className="container w-50 form-container mb-5">
        <Form.Select aria-label="Default select example">
      <option>Select Role</option>
      <option value="1">Front-end</option>
      <option value="2">Back-end</option>
      <option value="3">Full-Stack</option>
    </Form.Select>
    <Form.Control as="textarea" placeholder="Description" style={{ height: '100px' }} className="mt-3"/>
          {/* Email input */}
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Basic Price</Form.Label>
            <Form.Control type="text" placeholder="$0.00" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Standard Price</Form.Label>
            <Form.Control type="text" placeholder="$0.00" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Premium Price</Form.Label>
            <Form.Control type="text" placeholder="$0.00" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Image</Form.Label>
            <Form.Control type="text" placeholder="Enter image url" />
          </Form.Group>
          {/* Message input */}
         
          <div className="text-center mt-3">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
