import React from "react";

function RegistrationForm(props) {
  return (
    <div>
      <form action="/action_page.php" onSubmit={props.handleSubmit}>
        <div className="container">
          <h1>Register</h1>
          <label htmlFor="name">
            <p> Name</p>
          </label>
          <input
            type="text"
            placeholder=" Enter Name"
            name="name"
            id="name"
            value={props.user && props.user.name}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}> {props.error.name}</p>

          <label htmlFor="email">
            <p>Email</p>
          </label>
          <input
            type="text"
            placeholder="Enter Email"
            name="email"
            id="email"
            value={props.user && props.user.email}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}> {props.error.email}</p>

          <label htmlFor="psw">
            <p>Password</p>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            id="psw"
            value={props.user && props.user.password}
            onChange={props.handleChange}
          />
          <p style={{ color: "red" }}> {props.error.password}</p>
          <label htmlFor="confrimpassword">
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
          <p style={{ color: "red" }}> {props.error.confirmpassword}</p>

          <button type="submit" class="registerbtn">
            Register
          </button>
        </div>

        <div className="container signin"></div>
      </form>
    </div>
  );
}
export default RegistrationForm;
