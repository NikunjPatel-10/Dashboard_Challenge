import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./registration.css";
import { postRegisterData } from "../../services/apiService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Registration = () => {
  const naviagte = useNavigate();
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
    postRegisterData(values);
    naviagte("../login");
  };

  return (
    <div className="registration-form">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="form-size">
          <div className="heading-text">
            <h3>Registration page</h3>
          </div>
          <div>
            <label htmlFor="firstName">First Name</label>
            <Field
              type="text"
              id="firstName"
              name="firstName"
              className="form-Control"
            />
            <ErrorMessage name="firstName" component="div" />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <Field
              type="text"
              id="lastName"
              name="lastName"
              className="form-Control"
            />
            <ErrorMessage name="lastName" component="div" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              className="form-Control"
            />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              className="form-Control"
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <div className="btn-wrapper">
            <button type="submit">Register</button>
          </div>
          <div className="detail-text">
            <p>
              Already user then
              <Link to="../login" className="main-text">
                Click here
              </Link>{" "}
              to Sign Up
            </p>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Registration;
