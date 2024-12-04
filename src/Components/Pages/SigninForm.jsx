import React, { Component } from "react";
import "./SigninForm.css";
import AppleImage from "../../Assets/Images/apple.png";
import GoogleImage from "../../Assets/Images/google.webp";
import { Link, Navigate, useNavigate, } from "react-router-dom";

export default class SigninForm extends Component {

  // refreshToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ3ZmYyMmMwZDQyYTA5YWE3ZWRlOTgiLCJlbWFpbCI6ImFzaG9rQGdtYWlsLmNvbSIsImZ1bGxOYW1lIjoiQXNob2sgSmFpbiIsInVzZXJOYW1lIjoiYXNob2siLCJpYXQiOjE3MzMyODc3ODksImV4cCI6MTczNDE1MTc4OX0.0Py6ojPpQZ3FrzfNYJ7lyLeiYrcqaR5AynPiS6w7s5w";
  // accessToken =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzQ3ZmYyMmMwZDQyYTA5YWE3ZWRlOTgiLCJlbWFpbCI6ImFzaG9rQGdtYWlsLmNvbSIsImZ1bGxOYW1lIjoiQXNob2sgSmFpbiIsInVzZXJOYW1lIjoiYXNob2siLCJpYXQiOjE3MzMyODc3ODksImV4cCI6MTczMzM3NDE4OX0.7U8sGI_cDFDFUp381vGp3t8DfbB1XyChlV5l9ettR6Q";
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
      success: "",
    };
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      this.setState({ error: "All fields required!" });
      return;
    }
    const signinData = {
      email,
      password,
    };

    
    try {
      const response = await fetch(
        "https://video-dashboard-neon.vercel.app/api/v1/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(signinData),
        }
      );
      const {data} = await response.json();
      console.log("hello", data)
      if (data.accessToken && data.refreshToken) {
        console.log("we are here")
        // Store values in local storage
        localStorage.setItem("userDetails", JSON.stringify (data));
        // localStorage.setItem("refreshToken", data.refreshToken);

        // Store values in cookies
        document.cookie = `accessToken=${data.accessToken}`;
        document.cookie = `refreshToken=${data.refreshToken}`;
        // this.props.history.push("/dashboard");
        // <Navigate to={"/dashboard"} />;
        // this.props.history.push("/dashboard");
        window.location.href = "/dashboard";
        // <Link to="/dashboard"></Link>
      } else {
        this.setState({ error: data.message, success: "" });
      }
    } catch {
      this.setState({ error: "Something went wrong!" });
    }
    // this.setState({
    //   email: "",
    //   password: "",
    // });
  };
  render() {
    const { email, password, success, error } = this.state;

    return (
      <div>
        <div className="innerSignInForm">
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green " }}>{success}</p>}
          <div>
            <p style={{ fontSize: "2.6rem", fontWeight: "550" }}>Sign in</p>
          </div>
          <div>
            <p style={{ fontSize: "0.8rem" }}>Sign in with an Open account</p>
          </div>
          <div className="socialButton">
            <div className="buttonInner">
              <button
                className="googleButton"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    "https://next-solution-be.vercel.app/auth/google";
                }}
              >
                <img
                  src={GoogleImage}
                  style={{ height: "16px", width: "16px" }}
                ></img>
                Google
              </button>
            </div>
            <div className="buttonInner">
              <button className="appleButton">
                <img src={AppleImage}></img>
                Apple ID
              </button>
            </div>
          </div>

          <div>
            <p style={{ fontSize: "0.8rem" }}>Or continue with email address</p>
          </div>

          <form onSubmit={this.handleSubmit}>
            <div className="inputField">
              <input
                onChange={this.handleChange}
                name="email"
                value={email}
                className="innerInputField"
                type="email"
                placeholder="Email"
              ></input>

              <input
                onChange={this.handleChange}
                name="password"
                value={password}
                className="innerInputField"
                type="password"
                placeholder="Password"
              ></input>
              <div>
                <button className="signInButton" type="submit">
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
