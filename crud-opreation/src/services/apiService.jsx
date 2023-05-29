import axios from "axios";
import { BaseUrl } from "./../../environment";

let userId = null;
export const postData = async (data) => {
  await axios.post(BaseUrl + "company.json", { ...data }).then((res) => {
    // console.log(res);
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

// for registration

export const postRegisterData = async () => {
  return await axios.post(BaseUrl + "RegisterData.json");
};

export const getRegisterData = async () => {
  return await axios.get(BaseUrl + "RegisterData.json");
};

export const signUpWithEmailPassword = async (data) => {
  return await axios
    .post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAhozIDEW1PrhgBWYTzvomXLQHA8BFPH9Y",
      { email: data.email, password: data.password, returnSecureToken: true }
    )
    .then((res) => {
      // console.log(res);
      userId = res.data.localId;
      updateRegistrationData(data, userId);
    });
};

export const updateRegistrationData = async (data, userId) => {
  return await axios
    .put(BaseUrl + "RegisterData/" + userId + ".json", {
      ...data,
    })
    .then((res) => {
      console.log(res);
    });
};
export const loggedInUser = async (data) => {
  return await axios
    .post(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAhozIDEW1PrhgBWYTzvomXLQHA8BFPH9Y",
      { email: data.email, password: data.password, returnSecureToken: true }
    )
    .then((res) => {
      console.log("this is logged in log", res);
      localStorage.setItem("userId", res.data.localId);
    });
};
