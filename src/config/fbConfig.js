import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCN8n11cQVj0kxkeeUnYAdeI9iOBvNwtFI',
  authDomain: 'marioplan-react-24df1.firebaseapp.com',
  databaseURL: 'https://marioplan-react-24df1.firebaseio.com',
  projectId: 'marioplan-react-24df1',
  storageBucket: 'marioplan-react-24df1.appspot.com',
  messagingSenderId: '38189206380',
  appId: '1:38189206380:web:99cf5fee408e364c'
};

firebase.initializeApp(config);

export default firebase;
