import axios from "axios";

export async function signIn({ email, password }) {
  const res = await axios.post(`${process.env.STRAPI_BASEURL}/api/auth/local`, {
    identifier: email,
    password,
  });
  return res.data;
}
