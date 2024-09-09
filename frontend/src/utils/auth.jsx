import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/v1/",
});
//check if UID == 1. If true, send PUT to make user an instructor.
export const confirmUser = async () => {
  let token = localStorage.getItem("token");

  if (token) {
    try {
      api.defaults.headers.common["Authorization"] = `Token ${token}`;
      const response = await api.get("users/account");
      return response.data;
    } catch (error) {
      console.log("User was not confirmed")
      return null
    }
  }
  console.log("No token found")
  return null;
};

export const LogUserIn = async (formData) => {
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  try {
    const response = await api.post("users/login/", formData);
    if (response.status == 200) {
      let { user, token } = response.data;
      localStorage.setItem("token", token);
      api.defaults.headers.common["Authorization"] = `Token ${token}`;
      return user;
    }
  } catch (error) {
    console.log("failed loader")
    return null
  }
};

export const Signup = async (formData) => {
  try {
    api.defaults.headers.common["Authorization"] = ''
    const response = await api.post("users/signup/", Object.fromEntries(formData));
    if (response.status == 201) {
      let {user, token} = response.data;
      localStorage.setItem("token", token);
      console.log(token)
      api.defaults.headers.common["Authorization"] = `Token ${token}`;
      return user; 
    }
  } catch (error) {
    return error, "Failed to sign up";
  }
}

export const logOut =  () => {
    localStorage.removeItem("token")
    return "Logged Out!"
  }

