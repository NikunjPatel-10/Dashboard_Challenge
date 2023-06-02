import React from "react";
import { useState, useEffect } from "react";
import { getData } from "../services/apiService";

const useGetData = () => {
  const [companydata, setCompanydata] = useState([]);

  // const { search } = useContext(Context);

  useEffect(() => {
    getData().then((response) => {
      const responseData = [];
      for (const key in response.data) {
        const id = key;
        const shortData = response.data;
        const item = {
          id: id,
          name: shortData[id].name,
          address: shortData[id].address,
          description: shortData[id].description,
          email: shortData[id].email,
          companyType: shortData[id].companyType,
        };
        responseData.push(item);
      }
      setCompanydata(responseData);
    });
  }, []);
  return companydata;
};

export default useGetData;
