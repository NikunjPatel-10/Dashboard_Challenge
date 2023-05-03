import axios from "axios";
import { BaseUrl } from "./../../environment";
export let companyList;

export const postData = async (data) => {
  await axios.post(BaseUrl + "company.json", { ...data }).then((res) => {
    console.log(res);
  });
};

export const getData = () => {
  return axios.get(BaseUrl + "company.json");
};
