import React from "react";
// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <form>
        <section className="navToGridSection">
          <h2>EMPLOYEE INFORMATION</h2>
          {/**add -> direction image
           * provide valid URL to navigate to grid page
           */}
          <p className="nav-text-fromFormToGrid">
            <a href="#">Employee's list</a>
          </p>
        </section>
        <section className="personalInfoSection">
          <h3>Add Employee Information</h3>
          <h4>Add employee's personal information here - </h4>
          <ul className="inputFields-row1">
            <li>
              <label htmlFor="fName">FIRST NAME : </label>
              <input id="fName"></input>
            </li>
            <li>
              <label htmlFor="lName">LAST NAME : </label>
              <input id="lName"></input>
            </li>
            <li>
              <label htmlFor="position">POSITION/ROLE : </label>
              <input id="position"></input>
            </li>
          </ul>
          <h4>Add employee's contact information here - </h4>
          <ul className="inputFields-row2">
            <li>
              <label htmlFor="mobileNo">MOBILE NUMBER : </label>
              <input id="mobileNo"></input>
            </li>
            <li>
              <label htmlFor="address">ADDRESS : </label>
              <input id="address"></input>
            </li>
            <li>
              <label htmlFor="city">CITY : </label>
              <input id="city"></input>
            </li>
            <li>
              <label htmlFor="state">STATE : </label>
              <select id="state">
                <option>Tamil Nadu</option>
                <option>Kerala</option>
                <option>Andhra Pradesh</option>
              </select>
            </li>
          </ul>
        </section>
        <section className="buttonSection">
          <button className="save-btn">Save</button>
          <button className="save-addNew-btn">Save and add new</button>
        </section>
      </form>
    </div>
  );
}

export default App;
