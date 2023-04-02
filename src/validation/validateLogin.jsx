
export default function validateLogin(user, password) {

  if ( user === 'admin' && password === 'admin' ) {
    
    return true;
  }

  return false;
}
