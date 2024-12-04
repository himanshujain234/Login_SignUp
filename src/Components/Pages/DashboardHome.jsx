import React, { Component } from "react";
import "./DashboardHome.css";
import { FaUsers } from "react-icons/fa6";
import { CiMemoPad } from "react-icons/ci";


export default class DashboardHome extends Component { 
  render() {
    return (
      <div>
        <div>
          <p style={{fontSize: "1.5rem", fontWeight: "500"}}>Job Statistics</p>
        </div>
        <div className="tabMenu">
          <div className="tabEmployee">
            <div className="innerTabImg">
                <FaUsers size={25} color="#0A1E67"/>
            </div>
            <div className="innerTabText">
              <div>
                <p style={{fontFamily: "sans-serif", fontSize: "0.9rem"}}>Total Employees</p>
              </div>
              <div>
                <p style={{fontSize: "1.2rem", fontWeight: "500", fontFamily: "sans-serif"}}>270</p>
                </div>
            </div>
          </div>
          <div className="tabSalary">
          <div className="innerTabImg">
                <CiMemoPad size={25} color="#ED604C"/>
            </div>
            <div className="innerTabText">
              <div>
                <p style={{fontFamily: "sans-serif", fontSize: "0.9rem"}}>Gross Salary</p>
              </div>
              <div>
                <p style={{fontSize: "1.2rem", fontWeight: "500", fontFamily: "sans-serif"}}>$ 865</p>
                </div>
            </div>
          </div>
          <div className="tabPay">
          <div className="innerTabImg">
                <FaUsers size={25} color="#675D54"/>
            </div>
            <div className="innerTabText">
              <div>
                <p style={{fontFamily: "sans-serif", fontSize: "0.9rem"}}>Net Payable</p>
              </div>
              <div>
                <p style={{fontSize: "1.2rem", fontWeight: "500", fontFamily: "sans-serif"}}>$ 834</p>
                </div>
            </div>
          </div>
          <div className="tabJob">
          <div className="innerTabImg">
                <FaUsers size={25} color="#058EE1"/>
            </div>
            <div className="innerTabText">
              <div>
                <p style={{fontFamily: "sans-serif", fontSize: "0.9rem"}}>Job Applied</p>
              </div>
              <div>
                <p style={{fontSize: "1.2rem", fontWeight: "500", fontFamily: "sans-serif"}}>243</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
