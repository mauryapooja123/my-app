import React from "react";

function Registration(props) {
  return (
    <div>
      <form action="/action_page.php" onSubmit={props.handleSubmit}>
        <div className="container">
          <h1>Register</h1>
          <label htmlFor="name">
            <b>First Name</b>
          </label>
          <input
            type="text"
            placeholder=" Enter Name"
            name="name"
            id="name"
            value={props.user && props.user.name}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}>{props.error.name}</p>
          <label htmlfFor="lastname">
            <b>Enter LastName</b>
          </label>
          <input
            type="text"
            placeholder="Enter LastName"
            name="lastname"
            id="lastname"
            value={props.user && props.user.lastname}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}>{props.error.lastname}</p>

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={props.user && props.user.email}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}>{props.error.email}</p>

          <label htmlFor="psw">
            <b>Password</b>
          </label>

          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="psw"
            value={props.user && props.user.password}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}>{props.error.password}</p>

          {/* <span style={{ color: "red" }}>
            {props.error && props.error.password}
          </span> */}
          <label htmlFor="psw">
            <p>Confirm Password</p>
          </label>
          <input
            type="password"
            placeholder="Enter Confirm Password"
            name="confirmpassword"
            id="psw"
            value={props.user && props.user.confirmpassword}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}>{props.error.confirmpassword}</p>

          <hr />
          <button type="submit" class="registerbtn">
            Register
          </button>
        </div>

        <div className="container signin"></div>
      </form>
    </div>
  );
}
export default Registration;
