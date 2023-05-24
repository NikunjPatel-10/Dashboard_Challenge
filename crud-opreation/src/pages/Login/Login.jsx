import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import { getRegisterData } from "../../services/apiService";
import { Link, useNavigate, useNavigation } from "react-router-dom";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const [registerData, setRegisterData] = useState([]);
  useEffect(() => {
    getRegistrationDetails();
  }, []);

  const getRegistrationDetails = async () => {
    const response = await getRegisterData();
    console.log(response);
    let responseData = [];

    for (const key in response.data) {
      const id = key;
      const responses = {
        id: id,
        firstname: response.data[id].firstName,
        lastname: response.data[id].lastName,
        email: response.data[id].email,
        password: response.data[id].password,
      };
      responseData.push(responses);
    }
    return setRegisterData(responseData);
  };

  const navigate = useNavigate();

  const handleSubmit = (values) => {
    let auth = registerData.find(
      (data) => data.email === values.email && data.password === values.password
    );
    if (auth) {
      alert("login successfully");
      localStorage.setItem("auth", true);
      navigate("../home");
    } else {
      alert("invalid credentials");
    }
  };

  return (
    <div className="login-wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form-size">
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
            />
            <ErrorMessage name="email" className="error" />
          </div>
          <div className="">
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="form-Control"
            />
            <ErrorMessage name="password" className="error" />
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
  );
};

export default Login;
