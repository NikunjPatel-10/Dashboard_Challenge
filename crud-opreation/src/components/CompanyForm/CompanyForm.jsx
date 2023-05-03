import React, { useState } from "react";
import "./CompanyForm.css";
import { postData } from "../../services/apiService";

function CompanyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
    address: "",
  });

  const { name, email, phone, address } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    postData(formData);
  };
  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit}>
        <div className="form-Input">
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
        </div>
        <div className="form-Input">
          <label htmlFor="phone" className="form-label">
            Description
          </label>
          <input
            type="text"
            name="phone"
            className="form-Control"
            value={phone}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>

        <div className="form-Input">
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
        </div>

        <div className="form-Input">
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
        </div>
        <div className="btn-wrapper">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default CompanyForm;
