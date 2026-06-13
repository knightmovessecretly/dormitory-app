
import config from "../config";
const { API_URL, BASE_URL } = config;

export async function registerUser(data) {
  const res = await fetch(`${API_URL}users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, role: "user" }),
  });

  return res.json();
}

export async function loginUser(data) {
  console.log("qqqqqqqqqqqqqqqqqqqqqqqqq");
  console.log(`${BASE_URL}auth/login`);
  console.log(`${API_URL}auth/login`);
  const res = await fetch(`${API_URL}auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return res.json();
}

