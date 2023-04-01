
export default function ValidaLogin(user, password) {

  if ( user === 'admin' && password === 'admin' ) {
    
    return true;
  }

  return false;
}
