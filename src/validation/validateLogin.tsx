
export default function validateLogin(user: String, password: String) {

  if ( user === 'admin' && password === 'admin' ) {
    
    return true;
  }

  return false;
}
