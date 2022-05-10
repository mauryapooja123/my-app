import axios from "axios";
import React, { useEffect, useState } from "react";
import Registration from "../Form/Registration ";

function User() {
  useEffect(() => {
    getdata();
  }, []);

  const [user, setUser] = useState({});
  const [allData, setAllData] = useState([]);
  const [error, setErrors] = useState({});

  console.log(user, "user");

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });
    setErrors({});
  };
  const isValid = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let formData = true;
    switch (true) {
      case !user.name:
        setErrors({ name: "Firstname field is required!" });
        formData = false;
        break;
      case !user.lastname:
        setErrors({ lastname: "Lastname field is required!" });

        formData = false;
        break;
      case !user.email:
        setErrors({ email: "Email field is required!" });
        formData = false;
        break;
      case user.email && !regex.test(user.email):
        setErrors({ email: "Please enter valid email address!" });
        formData = false;
        break;
      case !checkEmail():
        setErrors({ email: "Email already exist!" });
        formData = false;
        break;
      case !user.password:
        setErrors({ password: "Password field is required!" });
        formData = false;
        break;
      case !user.confirmpassword:
        setErrors({ confirmpassword: "Confirm password field is required!" });
        formData = false;
        break;
      case !validation():
        setErrors({
          password: "confirm password  should be match with password",
        });
        formData = false;
        break;
      default:
        formData = true;
    }
    return formData;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      const res = await axios.post("http://localhost:2000/event", user);
      console.log(res, "res");
    }
  };
  const getdata = async () => {
    const res = await axios.get("http://localhost:2000/event");
    console.log(res.data, "ppp");
    setAllData(res.data);
  };

  const checkEmail = () => {
    const userData = allData.find((data) => data.email === user.email);
    if (userData) {
      return false;
    }
    return true;
  };
  const validation = () => {
    if (user.password !== user.confirmpassword) {
      return false;
    }
    return true;
  };

  return (
    <>
      <Registration
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        error={error}
        user={user}
      />
    </>
  );
}
export default User;
