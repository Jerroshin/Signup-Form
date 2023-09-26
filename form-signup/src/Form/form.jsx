import React, { Component } from "react";

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
      otp: "",
      errors: {},
      isFormValid: false,
      showOTPField: false,
      successMessage: "",
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
      successMessage: "yes",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      contactNumber: "",
      otp: "",
      errors: {},
      isFormValid: false,
      showOTPField: false,
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
      showOTPField,
      isFormValid,
      successMessage,
    } = this.state;

    return (
      <div className="Form-Full">
        {successMessage && <div className="success">{successMessage}</div>}
        <h2>Registration Form</h2>
        <form onSubmit={this.validateForm}>
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              pattern="[0-9]{10}"
              value={contactNumber}
              onChange={this.handleChange}
              required
            />
          </div>

          <div>
            <button type="submit">Proceed</button>
          </div>

          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}
        </form>

        {showOTPField && isFormValid && (
          <div className="OTP-Field">
            <h2>Enter OTP</h2>
            <form onSubmit={this.handleOTPSubmit}>
              <div>
                <label htmlFor="otp">OTP:</label>
                <input
                  type="text"
                  id="otp"
                  name="otp"
                  value={this.state.otp}
                  onChange={this.handleOTPChange}
                  pattern="[0-9]{4}"
                  required
                />
              </div>
              <div>
                <button type="submit">Submit OTP</button>
              </div>
            </form>
          </div>
        )}
      </div>
    );
  }
}

export default SignUp;
