import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../services/apiService";

const useGetData = () => {
  const [companydata, setCompanydata] = useState([]);
  useEffect(() => {
    getListData();
  }, []);

  /**
   * get data from the database
   * @returns
   */
  const getListData = async () => {
    const response = await getData();
    console.log(response.data);
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
        companyType: shortData[id].companyType,
      };
      responseData.push(responses);
    }
    return setCompanydata(responseData);
  };
  return companydata;
};

export default useGetData;
