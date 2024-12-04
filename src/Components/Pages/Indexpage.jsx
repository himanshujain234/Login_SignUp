import React, { Component } from "react";
import "./Indexpage.css";
import DashboardHome from "./DashboardHome";
import Logo from "../../Assets/Images/logo_deeporion.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import { SlOrganization } from "react-icons/sl";
import { TbFileDescription } from "react-icons/tb";
import { HiOutlineUsers } from "react-icons/hi2";
import { CiMemoPad } from "react-icons/ci";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { TbSmartHome } from "react-icons/tb";
import { FcSettings } from "react-icons/fc";

export default class Indexpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accessToken: "",
      refreshToken: "",
      userData: "",
    };
  }
  componentDidMount() {
    const userDetails = JSON.parse(localStorage.getItem("userDetails"));
    console.log("data", userDetails);
    this.setState({ userData: userDetails });
    // const refreshToken = localStorage.getItem('refreshToken');
    // const accessToken = localStorage.getItem('accessToken');

    // Optional: Retrieve from cookies
    // const cookies = document.cookie.split(";").reduce((acc, cookie) => {
    //   const [key, value] = cookie.split("=").map((c) => c.trim());
    //   acc[key] = value;
    //   return acc;
    // }, {});

    // this.setState({
    //   accessToken: accessToken || cookies.accessToken || "No access token",
    //   refreshToken: refreshToken || cookies.refreshToken || "No refresh token",
    // });
  }
  render() {
    const { userData } = this.state;
    console.log(userData);
    return (
      <div>
        <div></div>
        <div className="mainBody">
          <div className="sidebar">
            <div className="logoDiv">
              <img src={Logo}></img>
              <hr />
            </div>

            <div className="parentSideMenu">
              <div className="parentSideTopMenu">
                <div className="sideMenu">
                  <TbSmartHome color="rgb(123, 128, 135)" />
                  <p>Overview</p>
                </div>
                <div className="sideMenu">
                  <GoOrganization color="rgb(123, 128, 135)" />
                  <p>Payroll</p>
                </div>
                <div className="sideMenu">
                  <CiMemoPad color="rgb(123, 128, 135)" />
                  <p>Employees</p>
                </div>
                <div className="sideMenu">
                  <TbFileDescription color="rgb(123, 128, 135)" />
                  <p>Jobs</p>
                </div>
                <div className="sideMenu">
                  <SlOrganization color="rgb(123, 128, 135)" />
                  <p>Candidates</p>
                </div>
                <div className="sideMenu">
                  <HiOutlineUsers color="rgb(123, 128, 135)" />
                  <p>Calendar</p>
                </div>
              </div>
              <div className="parentSideBottomMenu">
                <div className="sideMenu">
                  <MdOutlineAddCircleOutline color="rgb(123, 128, 135)" />
                  <p>Get Help</p>
                </div>
                <div className="sideMenu">
                  <FcSettings color="rgb(123, 128, 135)" />
                  <p>Settings</p>
                </div>
              </div>
            </div>
          </div>
          <div class="vl"></div>
          <div className="rightComponent">
            <div className="topbar">
              <div className="searchBar">
                <div>
                  <IoIosSearch size={25} />
                </div>
                <div style={{ width: "100%", alignItems: "center" }}>
                  <input
                    type="search"
                    placeholder="Search anything you want..."
                    style={{ border: "none", width: "100%", height: "100%" }}
                  />
                </div>
              </div>
              <div className="profile">
                <div className="profileImage">
                  <img></img>
                </div>
                <div>
                  <p style={{ fontSize: "0.9rem", fontWeight: "500" }}>
                    {userData?.user?.fullName}
                  </p>
                </div>
                <div>
                  {" "}
                  <RiArrowDropDownLine size={35} />{" "}
                </div>
              </div>
            </div>
            <div className="dashHome">
              <DashboardHome />
            </div>
            <div className="dashBottomBody"></div>
          </div>
        </div>
      </div>
    );
  }
}
