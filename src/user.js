import { instance } from ".";

const API_KEY = import.meta.env.VITE_CHEC_SECRET_KEY;

const getToken = async ({ email }) => {
  try {
    const body = {
      email: email,
      base_url: "http://localhost:5173/confirm/",
    };
    const { data } = await instance.post(`customers/email-token`, body, {
      headers: {
        "X-Authorization": API_KEY,
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const exchangeToken = async ({ token }) => {
  try {
    const body = {
      token: token,
    };
    const { data } = await instance.post(`customers/exchange-token`, body, {
      headers: {
        "X-Authorization": API_KEY,
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const createUser = async ({ email, phone, firstname, lastname }) => {
  try {
    const body = {
      email: email,
      phone: phone,
      firstname: firstname,
      lastname: lastname,
    };
    const { data } = await instance.post(`customers`, body, {
      headers: {
        "X-Authorization": API_KEY,
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

const updateCustomer = async ({
  customerId,
  email,
  phone,
  firstname,
  lastname,
}) => {
  try {
    const body = {
      email: email,
      phone: phone,
      firstname: firstname,
      lastname: lastname,
    };
    const { data } = await instance.put(`customers/${customerId}`, body, {
      headers: {
        "X-Authorization": API_KEY,
        "Content-Type": "application/json",
      },
    });
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export {
  getToken,
  fetchOrders,
  fetchCustomer,
  exchangeToken,
  createCustomer,
  updateCustomer,
};
