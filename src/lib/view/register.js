import {authEmailAndPassword} from '../index.js';
import {validNameRegister} from '../index.js';
//import {emailVerification} from '../index.js';

export const register = () => {
  const divRegister = document.createElement('div');   
  const viewRegister = `

<form id="formRegister">
      <input type="text" id="name">
      <br>
      <br>
      <input type="email" id="email">
      <br>
      <br>
      <input type="password" id="password">
      <br>
  </form> 
<<<<<<< HEAD
  
=======

  <div id="divErrorMessage" width:"100px" height:"100px" border:"solid"></div>

  <button type="button" id="btn-register">Crear Cuenta</button>
>>>>>>> c64f9f3a3df9fadc8091d39077ede1b27b7a8646
  <p>ya te registraste <a href="">inicia sesion</a></p>
  `


  divRegister.innerHTML = viewRegister;
const btnRegister = divRegister.querySelector("#btn-register");
btnRegister.addEventListener('click', () => {
  const names = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
<<<<<<< HEAD
  authEmailAndPassword(email, password, names);

=======
  const names = document.querySelector('#name').value;
  authEmailAndPassword(email, password, names);
  validNameRegister(namesd);
>>>>>>> c64f9f3a3df9fadc8091d39077ede1b27b7a8646
})

  return divRegister;
};




