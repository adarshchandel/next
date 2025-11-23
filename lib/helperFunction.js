import { GoogleOAuthProvider } from '@react-oauth/google';


const loginWithGoogle = ( ) =>{
    <GoogleOAuthProvider> </GoogleOAuthProvider>
}


export function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}
