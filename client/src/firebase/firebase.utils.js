import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotsToMap = collections => {
  const transformedCollection = collections.docs.reduce((acc, doc) => {
    const { title, items } = doc.data();
    acc[title.toLowerCase()] = {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
    return acc;
  }, {});

  return transformedCollection;
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();

googleProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;
