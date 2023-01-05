import React from "react";
import "./main.css";
import { BsThreeDots } from "react-icons/bs";
import LineChart from "../helpers/LineChart";
import BarChart from "../helpers/BarChart";
const Details = () => {
  return (
    <div className="details">
      <div className="income_user">
        <Income />
        <User />
      </div>
      <Balance />
    </div>
  );
};

export default Details;
const Income = () => {
  return (
    <div className="income">
      <div className="title">
        <p className="heading">Total Income</p>
        <BsThreeDots className="icon" />
      </div>
      <div className="text">
        <h1>$124,563.00</h1>
        <span>+6.9%</span>
      </div>
      <div className="bar">
        <div className="completed"></div>
      </div>
      <p>Yearly Goal</p>
    </div>
  );
};
const User = () => {
  return (
    <div className="user">
      <div className="title">
        <p className="heading">New Users</p>
        <BsThreeDots className="icon" />
      </div>
      <div className="text">
        <h1>94.2%</h1>
        <span>+6.9%</span>
      </div>
      <BarChart />
    </div>
  );
};

const Balance = () => {
  const data = [
    50, 35, 40, 35, 60, 75, 20, 65, 95, 75, 35, 35, 60, 45, 120, 100, 105, 45,
    40, 76, 68, 85, 55, 80, 60, 70,
  ];
  return (
    <div className="balance">
      <div className="bal">
        <h3> Balance</h3>
        <select name="bal" id="">
          <option value="monthly">Monthly</option>
          <option value="weekly">Weekly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div className="line"></div>
      <div className="earning_sales">
        <div className="earning">
          <p className="heading">Earnings</p>

          <div className="text">
            <h2>43.41%</h2>
            <span>+2.5%</span>
          </div>
        </div>
        <div className="sales">
          <p className="heading">Sales Value</p>

          <div className="text">
            <h2>$95,422</h2>
            <span>+13.5%</span>
          </div>
        </div>
      </div>
      <LineChart data={data} />
    </div>
  );
};
