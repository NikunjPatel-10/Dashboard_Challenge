import React, { useEffect, useState } from "react";
import { deleteData, getData } from "../../services/apiService";
import { Link, useLocation } from "react-router-dom";
import "./CompanyList.css";
import { useContext } from "react";
import Context from "../../contexts/Context";
import DeleteOverlay from "./../DeleteOverlay/DeleteOverlay";
import SortData from "../SortData/SortData";
import Search from "../Search.jsx/Search";
import useGetData from "../../hooks/UseGetData";
import useFilter from "../../hooks/filterData";
import Table from "../Table/Table";

function CompanyList() {
  const companydata = useGetData();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    setFilterData(companydata);
  }, [companydata]);

  const handleSearch = (search) => {
    const filterCompanyData = useFilter(companydata, search);
    // console.log(filteredData);
    // const filterCompanyData = filterData(companydata, search);
    setFilterData(filterCompanyData);
  };

  const sortDataHandler = (selectedOption) => {
    if (selectedOption === "All") {
      setFilterData(companydata);
    } else {
      const filteredData = companydata.filter(
        (item) => item.companyType === selectedOption
      );
      setFilterData(filteredData);
    }
  };

  const [showDeleteOverlay, setShowDeleteOverlay] = useState(false);
  const [deleteItemId, setDeleteItemId] = useState(null); // Store the ID of the item to be deleted

  const handleDelete = (id) => {
    setDeleteItemId(id);
    setShowDeleteOverlay(true);
  };

  const handleConfirmDelete = async () => {
    if (deleteItemId) {
      await deleteData(deleteItemId);
      setFilterData((prevData) =>
        prevData.filter((item) => item.id !== deleteItemId)
      );
      setShowDeleteOverlay(false);
    }
  };

  const handleCancelDelete = () => {
    setShowDeleteOverlay(false);
  };
  // const tableColumns = [
  //   { header: "Name", field: "name" },
  //   { header: "E-mail", field: "email" },
  //   { header: "Type", field: "companyType" },
  //   { header: "Address", field: "address" },
  //   {
  //     header: "Actions",
  //     field: "actions",
  //     render: (item) => (
  //       <div className="actions">
  //         <button className="edit-btn" onClick={() => handleEdit(item.id)}>
  //           Edit
  //         </button>
  //         <button className="delete-btn" onClick={() => handleDelete(item.id)}>
  //           Delete
  //         </button>
  //       </div>
  //     ),
  //   },
  // ];

  return (
    <>
      <div className="company-form-btn-wrapper">
        <Link to={"/company-form/add"}>
          <button>Add Company</button>
        </Link>
      </div>
      <div className="companyList-wrapper">
        <div className="filterlist-wrapper">
          <Search onSearch={handleSearch} />
          <SortData companydata={companydata} onSortData={sortDataHandler} />
        </div>
        <table className="table">
          <thead className="table-header">
            <tr>
              <th>Name</th>
              <th>E-mail</th>
              <th>Type</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {filterData.length > 0 ? (
              filterData.map((item) => (
                <tr key={item.id} className="table-row">
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.companyType}</td>
                  <td>{item.address}</td>
                  <td>
                    <div className="actions">
                      <Link to={"/company-form/edit/" + item.id}>
                        <button className="edit-btn">Edit</button>
                      </Link>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr className="No-Data">
                <td colSpan="5">No Records found</td>
              </tr>
            )}
          </tbody>
        </table>
        {/* <Table columns={tableColumns} data={filterData} />
        {filterData.length === 0 && (
          <div className="No-Data">No Records found</div>
        )} */}
        {/* <Table columns={columns} data={filterData} /> */}
        {showDeleteOverlay && (
          <DeleteOverlay
            onConfirm={handleConfirmDelete}
            onCancel={handleCancelDelete}
          />
        )}
      </div>
    </>
  );
}

export default CompanyList;
