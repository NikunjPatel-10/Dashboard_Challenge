import React, { useEffect, useState } from "react";
import "./CompanyForm.css";

import * as Yup from "yup";
import {
  getCompanyListById,
  postData,
  updateCompanyList,
} from "../../services/apiService";
import { Link, useNavigate, useParams } from "react-router-dom";

function CompanyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    address: "",
  });

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(10, "maximum 10 characters are allowed")
      .required("name is required"),
    email: Yup.string()
      .email("invalid email address")
      .required("email is required"),
    description: Yup.string().required("description is required"),
    address: Yup.string().required("address is required"),
  });
  // get id from the parmas
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  /**
   * fetch data from database
   */
  async function fetchData() {
    const response = await getCompanyListById(id);
    console.log(response);
    setFormData({
      name: response.data.name,
      email: response.data.email,
      description: response.data.description,
      address: response.data.address,
    });
  }

  const navigate = useNavigate();

  const { name, email, description, address } = formData;

  const [formErrors, setFormErrors] = useState({});
  /**
   * post data to the database
   * @param {*} e
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    // try {
    //   validationSchema.validate(formData, { abortEarly: false }).then(() => {
    //     // setFormErrors({});
    //     // Form is valid - submit the data here

    //     console.log("Form is valid!");
    //   });
    // } catch (error) {
    //   if (error instanceof Yup.ValidationError) {
    //     const validationErrors = {};
    //     error.inner.forEach((innerError) => {
    //       validationErrors[innerError.path] = innerError.message;
    //     });
    //     setFormErrors(validationErrors);
    //   }
    // }

    if (id) {
      updateCompanyList(formData, id);
    } else {
      postData(formData);
    }
    console.log(formData);
    navigate("../home");
  };

  const btnText = id ? "Update" : "Submit";
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            name="name"
            className="form-Control"
            value={name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {formErrors.name ? <div>{formErrors.name}</div> : null}
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            name="email"
            className="form-Control"
            value={email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {formErrors.email ? <div>{formErrors.email}</div> : null}
        </div>
        <div>
          <label htmlFor="phone" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="phone"
            className="form-Control"
            value={description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          {formErrors.description ? <div>{formErrors.description}</div> : null}
        </div>

        <div>
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <textarea
            type="text"
            name="address"
            className="form-Control"
            value={address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
          {formErrors.address ? <div>{formErrors.address}</div> : null}
        </div>
        <div className="btn-wrapper">
          <button type="submit">{btnText}</button>
        </div>
      </form>
    </div>
  );
}

export default CompanyForm;
