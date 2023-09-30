import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./form.scss";
import Success from "./success";
import Fail from "./failure";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      contactNumber: "",
      errors: {},
      isFormValid: false,
      successMessage: "",
    };
  }

  validateForm = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = this.state;
    const errors = {};

    if (password !== confirmPassword) {
      errors.confirmPassword = <Fail />;
    }

    if (Object.keys(errors).length === 0) {
      // Form is valid, call handleSubmit
      this.handleSubmit();
    } else {
      this.setState({ errors, isFormValid: false, successMessage: "" });
    }
  };

  handleSubmit = () => {
    // Set the success message
    this.setState({ successMessage: "Form submitted successfully" });

    // Clear the form data
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      contactNumber: "",
      errors: {},
      isFormValid: false,
    });

    // Optionally, reset the success message after a few seconds
    setTimeout(() => {
      this.setState({ successMessage: "" });
    }, 5000);
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      contactNumber,
      errors,
      successMessage,
    } = this.state;

    return (
      <section className="main">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              {successMessage ? (
                <div className="success-center">
                  <Success message={successMessage} />
                </div>
              ) : (
                <>
                  <div className="Form-Full">
                    <h1>Registration Form</h1>
                    <form onSubmit={this.validateForm} className="Form-data">
                      <div>
                        <label htmlFor="firstName"></label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          value={firstName}
                          onChange={this.handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="lastName"></label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                          value={lastName}
                          onChange={this.handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="email"></label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          value={email}
                          onChange={this.handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="password"></label>
                        <input
                          type="password"
                          id="password"
                          name="password"
                          placeholder="Password"
                          value={password}
                          onChange={this.handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="confirmPassword"></label>
                        <input
                          type="password"
                          id="confirmPassword"
                          name="confirmPassword"
                          placeholder="Confirm Password"
                          value={confirmPassword}
                          onChange={this.handleChange}
                          required
                        />
                      </div>

                      <div>
                        <label htmlFor="contactNumber"></label>
                        <input
                          type="tel"
                          id="contactNumber"
                          name="contactNumber"
                          placeholder="Contact Number"
                          pattern="[0-9]{10}"
                          value={contactNumber}
                          onChange={this.handleChange}
                          required
                        />
                      </div>
                      <div>
                        <button type="submit">Submit</button>
                      </div>

                      {errors.confirmPassword && (
                        <div className="error">{errors.confirmPassword}</div>
                      )}
                    </form>
                  </div>
                </>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default SignUp;
