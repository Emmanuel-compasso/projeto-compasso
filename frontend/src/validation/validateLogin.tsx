export default async function validateLogin(user: string, password: String) {

  const response = await fetch("http://localhost:3002/api/user");
  const data = await response.json();

  const users = data.users;

  for (let i = 0; i < users.length; i++) {
    const userlog = users[i];
    const name = userlog.user;
    const pass = userlog.password;
    
    if(name === user && pass === password) {

      localStorage.setItem('userName', userlog.name);
      return true;
    }
  }

  return false;
}
