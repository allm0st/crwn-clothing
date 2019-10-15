import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCNNm20_XtQ97KPJE-kmEa-7QIy0fj8XkE',
  authDomain: 'crwn-db-bf3f5.firebaseapp.com',
  databaseURL: 'https://crwn-db-bf3f5.firebaseio.com',
  projectId: 'crwn-db-bf3f5',
  storageBucket: 'crwn-db-bf3f5.appspot.com',
  messagingSenderId: '519065160025',
  appId: '1:519065160025:web:4f2d182cedd5480538a448',
  measurementId: 'G-FH92SSHYC7',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user: ', error);
    }
  }

  return userRef;
};

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
