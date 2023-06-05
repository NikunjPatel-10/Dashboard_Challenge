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
    companyType: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(10, "maximum 10 characters are allowed")
      .required("name is required"),
    email: Yup.string()
      .email("invalid email address")
      .required("email is required"),
    description: Yup.string().required("description is required"),
    address: Yup.string().required("address is required"),
    companyType: Yup.string().required("this field is required"),
  });
  // get id from the parmas
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

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
      companyType: response.data.companyType,
      address: response.data.address,
    });
  }

  const navigate = useNavigate();

  const { name, email, description, address, companyType } = formData;

  /**
   * post data to the database
   * @param {*} e
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await validationSchema.validate(formData, { abortEarly: false });
      if (id) {
        await updateCompanyList(formData, id);
      } else {
        await postData(formData);
      }
      navigate("../home");
      setFormData({
        name: "",
        email: "",
        description: "",
        address: "",
        companyType: "",
      });
    } catch (validationErrors) {
      const errors = {};
      validationErrors.inner.forEach((error) => {
        errors[error.path] = error.message;
      });
      setFormErrors(errors);
    }

    console.log(formData);
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
            className="form-control"
            value={name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          {formErrors.name && (
            <div className="error-message">{formErrors.name}</div>
          )}
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="text"
            name="email"
            className="form-control"
            value={email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          {formErrors.email && (
            <div className="error-message">{formErrors.email}</div>
          )}
        </div>
        <div>
          <label>
            Company Type:
            <select
              value={companyType}
              className="form-control"
              onChange={(e) =>
                setFormData({ ...formData, companyType: e.target.value })
              }
            >
              <option value="ALL">-- Select --</option>
              <option value="NC">NC</option>
              <option value="MNC">MNC</option>
            </select>
          </label>
          {formErrors.companyType && (
            <div className="error-message">{formErrors.companyType}</div>
          )}
        </div>
        <div>
          <label htmlFor="phone" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="phone"
            className="form-control"
            value={description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
          {formErrors.description && (
            <div className="error-message">{formErrors.description}</div>
          )}
        </div>

        <div>
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <textarea
            type="text"
            name="address"
            className="form-control"
            value={address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
          {formErrors.address && (
            <div className="error-message">{formErrors.address}</div>
          )}
        </div>
        <div className="btn-wrapper">
          <button type="submit">{btnText}</button>
        </div>
      </form>
    </div>
  );
}

export default CompanyForm;
