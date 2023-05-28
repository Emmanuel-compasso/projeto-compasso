export default async function validateLogin(user: string, password: String) {
  const response = await fetch("http://localhost:3002/api/v1/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ user: user, password: password }),
  });
  const data = await response.json();


  if (data.status === 200) {
    localStorage.setItem("userName", data.user.name);
    return true;
  }

  return false;
}
