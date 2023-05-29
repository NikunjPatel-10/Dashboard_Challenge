import React, { useEffect, useState } from "react";
import "./SortData.css";

const SortData = ({ onSortData }) => {
  const [selectedOption, setselectedOption] = useState("All");
  const sortCompanyData = (e) => {
    setselectedOption(e.target.value);
    onSortData(e.target.value);
  };

  //   console.log(selectedOption);

  return (
    <div className="sortData-wrapper">
      <div>
        <label>
          Sort By:
          <select
            className="form-Control"
            defaultValue={selectedOption}
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
