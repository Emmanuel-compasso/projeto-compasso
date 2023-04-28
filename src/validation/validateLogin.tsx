export default async function validateLogin(user: string, password: String) {

  const response = await fetch("http://localhost:3002/api/user");
  const data = await response.json();

  const users = data.users;
  console.log("vc informou: " + user + " " + password);

  for (let i = 0; i < users.length; i++) {
    const userlog = users[i];
    const name = userlog.user;
    const pass = userlog.password;

    console.log("User: " + name + " pass: " + pass);
    
    if(name === user && pass === password) {

      localStorage.setItem('userLogin', user);
      return true;
    }
  }

  return false;
}
