import axios from "axios";
import { BaseUrl } from "./../../environment";

export const postData = async (data) => {
  await axios.post(BaseUrl + "company.json", { ...data }).then((res) => {
    console.log(res);
  });
};

export const getData = async () => {
  return await axios.get(BaseUrl + "company.json");
};

export const deleteData = async (id) => {
  await axios.delete(BaseUrl + "company/" + id + ".json");
};

export const getCompanyListById = async (id) => {
  return await axios.get(BaseUrl + "company/" + id + ".json");
};

export const updateCompanyList = async (data, id) => {
  await axios.put(BaseUrl + "company/" + id + ".json", { ...data });
};
