import axios from "axios";
import React, { useEffect, useState } from "react";
import RegistrationForm from "../Form/RegistrationForm";
import { ToastContainer, toast } from "react-toastify";

function UserForm() {
  useEffect(() => {
    getdata();
  }, []);
  const [user, setUser] = useState({});
  const [allData, setAllData] = useState([]);
  const [error, setError] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    setUser({ ...user, [e.target.name]: e.target.value });

    setError({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isValid()) {
      await axios.post("http://localhost:2000/student", user);

      console.log(user);
      toast({ description: "Wow so easy !", time: 1000, type: "success" });
      //alert("User successfully registered");
    }
  };

  const getdata = async () => {
    const res = await axios.get("http://localhost:2000/student");
    console.log(res.data, "ppp");
    setAllData(res.data);
  };
  const chackName = () => {
    const userData = allData.find((data) => data.name === user.name);
    if (userData) {
      return false;
    }
    return true;
  };
  const chackEmail = () => {
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
  const isValid = () => {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    let formData = true;
    switch (true) {
      case !user.name:
        setError({ name: "Name field is required!" });
        formData = false;
        break;
      case !chackName():
        setError({ name: "Name already exist!" });
        formData = false;
        break;
      case !user.email:
        setError({ email: "Email field is required!" });
        formData = false;
        break;
      case user.email && !regex.test(user.email):
        setError({ email: "Please enter valid email address!" });
        formData = false;
        break;
      case !chackEmail():
        setError({ email: "Email already exist!" });
        formData = false;
        break;
      case !user.password:
        setError({ password: "Password field is required!" });
        formData = false;
        break;
      case !user.confirmpassword:
        setError({ confirmpassword: "Confirm password field is required!" });
        formData = false;
        break;
      case !validation():
        setError({
          password: "confirm password  should be match with password",
        });
        formData = false;
        break;
      default:
        formData = true;
    }
    return formData;
  };

  return (
    <>
      <ToastContainer />
      <RegistrationForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        user={user}
        error={error}
      />
    </>
  );
}
export default UserForm;
