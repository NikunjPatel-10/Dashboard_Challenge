import React, { useEffect, useState } from "react";
import { deleteData } from "../../services/apiService";
import { Link, useLocation } from "react-router-dom";
import "./CompanyList.css";
import { useContext } from "react";
import Context from "../../contexts/Context";
import DeleteOverlay from "./../DeleteOverlay/DeleteOverlay";
import SortData from "../SortData/SortData";
import Search from "../Search.jsx/Search";
import useGetData from "../../hooks/UseGetData";

function CompanyList() {
  // const [companydata, setCompanydata] = useState([]);
  // useEffect(() => {
  //   getListData();
  // }, []);

  // /**
  //  * get data from the database
  //  * @returns
  //  */
  // const getListData = async () => {
  //   const response = await getData();
  //   // console.log(response.data);
  //   const responseData = [];
  //   for (const key in response.data) {
  //     const id = key;
  //     // console.log(key);
  //     const shortData = response.data;
  //     const responses = {
  //       id: id,
  //       name: shortData[id].name,
  //       address: shortData[id].address,
  //       description: shortData[id].description,
  //       email: shortData[id].email,
  //       companyType: shortData[id].companyType,
  //     };
  //     responseData.push(responses);
  //   }
  //   return setCompanydata(responseData);
  // };

  /**
   * sort companydata
   */

  const companydata = useGetData();
  const [sortData, setSortData] = useState(companydata);
  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);

  /**
   * get option value from child components
   * @param {*} selectedOption
   */
  const sortDataHandler = (selectedOption) => {
    if (selectedOption === "All") {
      setSortData(companydata);
    } else {
      setSortData(
        companydata.filter((res) => res.companyType === selectedOption)
      );
    }
  };

  /**
   * get data from header using context
   */
  const { search } = useContext(Context);
  console.log(search);

  /**
   * filter companydata according to the search
   */
  const filteredData = sortData.filter((data) => {
    if (!data) {
      return null;
    } else if (!search) {
      return data;
    } else {
      return JSON.stringify(data).includes(search);
    }
  });

  // for delete data

  // useEffect(() => {
  //   handleConfirmDelete();
  // }, []);

  const handleDelete = () => {
    setShowDeleteOverlay(true);
  };

  /**
   * to delete data on confirm button
   * @param {*} id
   */
  async function handleConfirmDelete(id) {
    // delete data here
    console.log(id);
    await deleteData(id);
    setShowDeleteOverlay(false);
  }

  /**
   *
   */
  function handleCancelDelete() {
    setShowDeleteOverlay(false);
  }

  return (
    <>
      <div className="company-form-btn-wrapper">
        <Link to={"/company-form/add"}>
          <button>Add Company</button>
        </Link>
      </div>
      <div className="companyList-wrapper">
        <div className="filterlist-wrapper">
          <Search />
          <SortData companydata={companydata} onSortData={sortDataHandler} />
        </div>
        <table className="table">
          <thead className="table-header">
            <th>Name</th>
            <th>E-mail</th>
            <th>Type</th>
            <th>Address</th>
            <th>Actions</th>
          </thead>
          <tbody className="table-body">
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => {
                return (
                  <tr className="table-row">
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.companyType}</td>
                    <td>{item.address}</td>
                    <td>
                      <div className="actions">
                        <Link to={"/company-form/edit/" + item.id}>
                          <button className="edit-btn">Edit</button>
                        </Link>
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
    </>
  );
}

export default CompanyList;
