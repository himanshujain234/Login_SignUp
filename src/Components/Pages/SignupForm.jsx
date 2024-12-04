import React, { Component } from "react";
import "./SignupForm.css";
import GoogleImage from "../../Assets/Images/google.webp";
import AppleImage from "../../Assets/Images/apple.png";

export default class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullName: "",
      email: "",
      userName: "",
      password: "",
      success: "",
      error: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async (e) => {
    e.preventDefault();

    const { fullName, email, userName, password } = this.state;

    if (!fullName || !email || !userName || !password) {
      this.setState({ error: "All fields required!" });
      return;
    }
    const signupData = {
      fullName,
      email,
      userName,
      password,
    };

    try {
      const response = await fetch(
        "https://video-dashboard-neon.vercel.app/api/v1/users/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signupData),
        }
      );
      const data = await response.json();
      if (response.status === 201) {
        this.setState({ success: "Sign up Successful!", error: "" });
      } else {
        this.setState({ error: data.message, success: "" });
      }
    } catch {
      this.setState({ error: "Something went wrong!" });
    }
    this.setState({
      fullName: "",
      email: "",
      userName: "",
      password: "",
    });
  };

  render() {
    const { fullName, email, userName, password, error, success } = this.state;
    return (
      <div>
        <div className="innerSignUpForm">
          <div>
            <p style={{ fontSize: "2.6rem", fontWeight: "550" }}>Sign up</p>
          </div>

          <div>
            <p style={{ fontSize: "0.8rem" }}>Sign up with email address</p>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}

          <form onSubmit={this.handleSubmit}>
            <div className="inputFld">
              <input
                onChange={this.handleChange}
                name="fullName"
                value={fullName}
                className="innerInputFld"
                type="text"
                placeholder="Full Name"
              ></input>
              <input
                onChange={this.handleChange}
                name="userName"
                value={userName}
                className="innerInputFld"
                type="text"
                placeholder="Username"
              ></input>
              <input
                onChange={this.handleChange}
                name="email"
                value={email}
                className="innerInputFld"
                type="email"
                placeholder="Email"
              ></input>

              <input
                onChange={this.handleChange}
                name="password"
                value={password}
                className="innerInputFld"
                type="password"
                placeholder="Password"
              ></input>

              <div className="mainHrLine">
                <p className="hrLine">
                  <span>OR</span>
                </p>
              </div>

              <div>
                <div className="socialBtn">
                  <div className="btnInner">
                    <button className="googleBtn"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href='https://next-solution-be.vercel.app/auth/google';
                      }}>
                      <img
                        src={GoogleImage}
                        style={{ height: "16px", width: "16px" }}
                      ></img>
                      Google
                    </button>
                  </div>
                  <div className="btnInner">
                    <button className="appleBtn">
                      <img src={AppleImage}></img>
                      Apple ID
                    </button>
                  </div>
                </div>
                <br />

                <button className="signInBtn">Sign Up</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
