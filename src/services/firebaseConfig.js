import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCQHsEm186tVKqPy2f5GgaYw0if1e1EOxU",
    authDomain: "mob20-react-conclusao.firebaseapp.com",
    databaseURL: "https://mob20-react-conclusao-default-rtdb.firebaseio.com",
    projectId: "mob20-react-conclusao",
    storageBucket: "mob20-react-conclusao.appspot.com",
    messagingSenderId: "618540899524",
    appId: "1:618540899524:web:ea36d12377edcc49ed3d91"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export default firebase;