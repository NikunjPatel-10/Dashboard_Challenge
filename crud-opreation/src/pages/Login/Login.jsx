import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { getRegisterData, loggedInUser } from "../../services/apiService";
import { Link, useNavigate, useNavigation } from "react-router-dom";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  /**
   * validate using yup
   */
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  // const [registerData, setRegisterData] = useState([]);
  // useEffect(() => {
  //   getRegistrationDetails();
  // }, []);

  /**
   * get the registration data of the all users
   * @returns
   */
  // const getRegistrationDetails = async () => {
  //   const response = await getRegisterData();
  //   console.log(response);
  //   let responseData = [];

  //   for (const key in response.data) {
  //     const id = key;
  //     const responses = {
  //       id: id,
  //       firstname: response.data[id].firstName,
  //       lastname: response.data[id].lastName,
  //       email: response.data[id].email,
  //       password: response.data[id].password,
  //     };
  //     responseData.push(responses);
  //   }
  //   return setRegisterData(responseData);
  // };

  const navigate = useNavigate();

  /**
   * get the register data and match with email and password
   * @param {*} values
   */
  const handleSubmit = async (values) => {
    try {
      loggedInUser(values);
      alert("login successfully");
      localStorage.setItem("auth", true);
      navigate("../home");
    } catch (error) {
      alert("invalid credentials");
      console.log("error");
    }

    // let auth = registerData.find(
    //   (data) => data.email === values.email && data.password === values.password
    // );
    // if (auth) {
    //   // alert("login successfully");
    //   // localStorage.setItem("auth", true);
    // } else {
    // alert("invalid credentials");
    // }
  };

  return (
    <div className="background-wrapper">
      <div className="login-wrapper">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="loginform-size">
            <div className="heading-text">
              <h3>Login page</h3>
            </div>
            <div className="">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="form-Control"
                placeholder="enter email here"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>
            <div className="">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="form-Control"
                placeholder="enter password here"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>
            <div className="btn-wrapper">
              <button type="submit">Submit</button>
            </div>
            <div className="detail-text">
              <p>
                If you are a new user{" "}
                <Link to="../registration" className="main-text">
                  Click here
                </Link>{" "}
                to register
              </p>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default Login;
