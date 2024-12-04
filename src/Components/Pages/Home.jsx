import React, { Component } from "react";
import "./Home.css";
import Image from "../../Assets/Images/bg.png";
import SigninForm from "./SigninForm";
import SignupForm from "./SignupForm";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      openLogin: false,
      bodyText: false,
      openRegister: false,
    };
  }
  handleRegister = () => {
    this.setState((prevState) => ({
      openRegister: !prevState.openRegister,
      openLogin: !prevState.openLogin
    }))
  };

  // handleLogin = () => {
  //   this.setState({ openLogin: true });
  //   this.setState({ openRegister: false });
  // };

  componentDidMount() {
    this.setState({ openLogin: true });
  }
  // changeText(){
  //   this.bodyText = "Sign in" ? "Sign in" : "Sign up"
    
  // }

  render() {
    return (
      <div>
        <div className="header">
          <p style={{ fontSize: "20px", fontWeight: "bold " }}>LOGO</p>
          <p style={{ fontSize: "13px" }}>
            { this.state.openLogin ? "Don't have an account?" : "Already have an account?"} {""}
            <span
              onClick={this.handleRegister} 
              style={{ fontWeight: "700", cursor: "pointer" }}
            >
              {" "}
              {this.state.openLogin ? "Sign up" : "Sign in"}
            </span>
          </p>
        </div>
        <div className="bodyDiv">
          <div className="mainSignIn">
            <div className="leftImage">
              <img className="loginImage" src={Image} alt="" />
            </div>

            {/* Sign In form started */}
            <div className="rightPanel">
              {/* <SigninForm /> */}
              {this.state.openLogin && <SigninForm />}
              {this.state.openRegister && <SignupForm />}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
