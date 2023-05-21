import { useFormik } from "formik";
import "./About.css";
import React from "react";
import * as Yup from "yup";

const schema = Yup.object().shape({
  name: Yup.string().required("name is required"),
  email: Yup.string().email("inValid email").required("email is required"),
});
function About() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="form-wrapper">
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-Control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="form-Control"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="btn-wrapper">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default About;
