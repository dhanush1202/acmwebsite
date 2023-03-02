import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function Contact() {
  return (
    <div className="container my-5 ">
      <h1 style={{ textAlign: "center" }}>Contact Us</h1>
    <div className="container">

      <div className="mb-3 row">
        <label htmlFor="staticEmail" className="col-sm-2 col-htmlForm-label">
          Name
        </label>
        <div className="col-sm-10">
          
        <Form.Control type="text" placeholder="" />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-htmlForm-label">
          Email
        </label>
        <div className="col-sm-10">
        <Form.Control type="text" placeholder="" />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-htmlForm-label">
          Member of ACM?
        </label>
        <div className="col-sm-10">
          <Form.Group className="mb-3">
            <Form.Select>
              <option>acm member</option>
              <option>not acm member</option>
            </Form.Select>
          </Form.Group>
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-htmlForm-label">
          Department
        </label>
        <div className="col-sm-10">
        <Form.Control type="text" placeholder="" />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="inputPassword" className="col-sm-2 col-htmlForm-label">
          Drop us a line
        </label>
        <div className="col-sm-10">
          <InputGroup>
            <Form.Control as="textarea" aria-label="With textarea" />
          </InputGroup>
        </div>
      </div>
    </div>
    </div>
  );
}
