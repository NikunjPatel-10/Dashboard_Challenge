import React, { useEffect, useState } from "react";
import { getData, companyList } from "../../services/apiService";
import { Link } from "react-router-dom";

function CompanyList() {
  const [companydata, setCompnaydata] = useState([]);

  useEffect(() => {
    getListData();
  }, []);

  const getListData = async () => {
    const response = await getData();
    console.log(response.data);
    const responseData = [];
    response.data[""];
    for (const key in response.data) {
      const id = key;
      console.log(key);
      const short = response.data;

      const responses = {
        name: short[id].name,
        address: short[id].address,
        description: short[id].description,
        email: short[id].email,
      };
      responseData.push(responses);
    }
    return setCompnaydata(responseData);
  };
  console.log(companydata);
  return (
    <div>
      <div>
        <div></div>
        <div>
          <Link to={"/company-form"}>
            <button>AddCompany</button>
          </Link>
        </div>
      </div>
      <div>
        {companydata.map((item) => {
          return (
            <ul>
              <li>
                <p>{item.name}</p>
                <p>{item.description}</p>
                <p>{item.address}</p>
                <p>{item.email}</p>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default CompanyList;
