import axios from "axios";
const rootUrl = "http://localhost:8000";
const userEP = rootUrl + "/api/v1/user";
const transactionEP = rootUrl + "/api/v1/transaction";

export const postNewUser = async (obj) => {
  try {
    const response = await axios.post(userEP, obj);

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const loginUser = async (obj) => {
  try {
    const response = await axios.post(userEP + "/login", obj);
    console.log(response);

    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

/////transaction api

export const postNewTransaction = async (obj) => {
  try {
    const response = await axios.post(transactionEP, obj);
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const getTransaction = async (obj) => {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));

    const userId = user._id;

    const response = await axios.post(transactionEP, obj, {
      headers: {
        authorization: userId,
      },
    });
    return response.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
