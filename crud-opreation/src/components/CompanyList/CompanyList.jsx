import React, { useEffect, useState } from "react";
import { getData, deleteData } from "../../services/apiService";
import { Link, useLocation } from "react-router-dom";
import "./CompanyList.css";
import { useContext } from "react";
import Context from "../../contexts/Context";
import DeleteOverlay from "../DeleteOverlay";
import { CSSTransition } from "react-transition-group";

function CompanyList() {
  const [companydata, setCompanydata] = useState([]);
  useEffect(() => {
    getListData();
  }, []);

  /**
   * get data from header using context
   */
  const { search } = useContext(Context);
  console.log(search);

  /**
   * filter companydata according to the search
   */
  const SearchData = companydata.filter((data) => {
    if (!data) {
      return null;
    }
    if (!search) {
      return data;
    } else {
      return JSON.stringify(data).includes(search);
    }
  });

  /**
   * get data from the database
   * @returns
   */
  const getListData = async () => {
    const response = await getData();
    // console.log(response.data);
    const responseData = [];
    for (const key in response.data) {
      const id = key;
      // console.log(key);
      const shortData = response.data;
      const responses = {
        id: id,
        name: shortData[id].name,
        address: shortData[id].address,
        description: shortData[id].description,
        email: shortData[id].email,
      };
      responseData.push(responses);
    }
    return setCompanydata(responseData);
  };

  // for delete data

  useEffect(() => {
    handleConfirmDelete();
  }, []);

  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);
  const handleDelete = () => {
    setShowDeleteOverlay(true);
  };

  /**
   * to delete data on confirm button
   * @param {*} id
   */
  async function handleConfirmDelete(id) {
    // delete data here
    await deleteData(id);
    getListData();
    setShowDeleteOverlay(false);
  }

  /**
   *
   */
  function handleCancelDelete() {
    setShowDeleteOverlay(false);
  }

  return (
    <div>
      <div className="companyForm-btn-wrapper">
        <div></div>
        <div>
          <Link to={"/company-form/add"}>
            <button>AddCompany</button>
          </Link>
        </div>
      </div>
      <div className="companyList-wrapper">
        <table className="table">
          <thead className="table-header">
            <th>Name</th>
            <th>E-mail</th>
            <th>Address</th>
            <th>Actions</th>
          </thead>
          <tbody className="table-body">
            {SearchData.length > 0 ? (
              SearchData.map((item) => {
                return (
                  <tr className="table-row">
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.address}</td>
                    <td>
                      <div className="actions">
                        <Link to={"/company-form/edit/" + item.id}>
                          <button className="edit-btn">Edit</button>
                        </Link>
                        {/* <button
                          className="delete-btn"
                          onClick={() => DeleteCompanyList(item.id)}
                        >
                          Delete
                        </button> */}

                        <button className="delete-btn" onClick={handleDelete}>
                          Delete
                        </button>
                        {showDeleteOverlay && (
                          <DeleteOverlay
                            onConfirm={() => handleConfirmDelete(item.id)}
                            onCancel={handleCancelDelete}
                          />
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="No-Data">No Records found</tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CompanyList;
