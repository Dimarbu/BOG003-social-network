const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");
export const authEmailAndPassword = (email, password, names) => {
  // authEmailAndPassword es la funcion que contiene los 3 parametro para registrarse
  const createUser = firebase.auth().createUserWithEmailAndPassword(email, password)
  // usamos el metodo createUserWithEmailAndPassword para crear usuario con email y password
    .then((userCredential) => {
      userCredential.user.updateProfile({
        // Metodo updateProfile para obtener el nombre registrado
        displayName: names,
      }).then(() => {
        const configurationUrlEmail = {
          url: 'http://localhost:5000',
        };
        firebase.auth().currentUser.sendEmailVerification(configurationUrlEmail);
        // Metodo sendEmailVerification para enviar correo de verificación al registrarse
      });
    });
  return createUser;
};

export const signIn = (email, password) => {
  // signIn es la funcion para iniciar sesion con email y password
  const signInUser = firebase.auth().signInWithEmailAndPassword(email, password);
  return signInUser;
};

export const authLogin = () => {
  // authLogin es la funcion para verificar usuario ya registrado y direccionarlo a nueva ruta
  const userLogin = firebase.auth().onAuthStateChanged((user) => {
  // Usamos el metodo onAuthStateChanged para verificar el estado de autenticacion
    if (user) {
      window.location.href = '#/home';
      // en caso de que se cumpla user se direccion la ruta home
    }
  });
  return userLogin;
};

export const signOut = () => {
  const logOut = firebase.auth().signOut()
    .then(() => {
      window.location.href = '';
    });
  return logOut;
};

export const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider)
    .then(() => {
      window.location.href = '#/home';
    });
};

// Comienzo de Firestore
