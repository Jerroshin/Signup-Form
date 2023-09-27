import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./form.scss";

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
    };
  }

  validateForm = (e) => {
    e.preventDefault();
    const { password, confirmPassword } = this.state;
    const errors = {};

    if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (Object.keys(errors).length === 0) {
      this.setState({ showOTPField: true, errors: {}, isFormValid: true });
    } else {
      this.setState({ errors, showOTPField: false, isFormValid: false });
    }
  };

  handleOTPChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleOTPSubmit = (e) => {
    e.preventDefault();

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
    } = this.state;

    return (
      <section className="main">
        <Container>
          <Row className="justify-content-center">
            <Col xxl={4}>
              <div className="Form-Full">
                <h1>Registration Form</h1>
                <form onSubmit={this.validateForm} className="Form-data">
                  <div>
                    <label htmlFor="firstName"></label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="FirstName"
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
                      placeholder="LastName"
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
            </Col>
          </Row>
        </Container>
      </section>
    );
  }
}

export default SignUp;
