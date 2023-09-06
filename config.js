import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyD6wgl45YfPuXEcybjwcRdabG-oOvlLgK4',
  authDomain: 'attendance-1c318.firebaseapp.com',
  databaseURL: 'https://attendance-1c318-default-rtdb.firebaseio.com',
  projectId: 'attendance-1c318',
  storageBucket: 'attendance-1c318.appspot.com',
  messagingSenderId: '117873126300',
  appId: '1:117873126300:web:0db0414b6f5cbf17ddb659',
};
firebase.initializeApp(firebaseConfig);
export default firebase.database();
