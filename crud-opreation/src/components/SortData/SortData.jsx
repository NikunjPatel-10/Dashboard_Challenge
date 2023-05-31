import React, { useEffect, useState } from "react";
import "./SortData.css";

const SortData = ({ onSortData }) => {
  const sortCompanyData = (e) => {
    onSortData(e.target.value);
  };

  //   console.log(selectedOption);

  return (
    <div className="sortData-wrapper">
      <div>
        <label>
          <span className="sort-text"> Filter By:</span>
          <select
            className="form-Control"
            defaultValue="All"
            onChange={sortCompanyData}
          >
            <option value="All">All</option>
            <option value="NC">NC</option>
            <option value="MNC">MNC</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default SortData;
