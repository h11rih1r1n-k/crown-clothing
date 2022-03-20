import firebase from "firebase/app";
import "firebase/firestore"; // database
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA9aLyYE0F6QJNTnPtskDw8Ar0LtWP4WXE",
  authDomain: "crwn-db-f0700.firebaseapp.com",
  projectId: "crwn-db-f0700",
  storageBucket: "crwn-db-f0700.appspot.com",
  messagingSenderId: "436552231470",
  appId: "1:436552231470:web:30b8345dda9ec738888dbf",
  measurementId: "G-Q6DBGZV9VV",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
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
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export const checkUserCartItems = async (uid) => {
  const cartRef = firestore.doc(`carts/${uid}`);
  const snapshot = await cartRef.get();

  if (!snapshot.exists) {
    try {
      await cartRef.set({
        cartItems: [],
      });
      return [];
    } catch (error) {
      console.log("error getting user cart in firestore", error.message);
    }
  }

  console.log(snapshot.data());

  return snapshot.data().cartItems;
};

export const updateUserCartItems = async (uid, cartItems) => {
  const cartRef = firestore.doc(`carts/${uid}`);

  try {
    await cartRef.set({
      cartItems,
    });
  } catch (error) {
    console.log("error updating user cart in firestore", error.message);
  }
};

export const addCollectionsAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionSnapshotToMap = (collectionsSnapshot) => {
  const transformedCollection = collectionsSnapshot.docs.map((doc) => {
    const { title, items } = doc.data();
    return {
      id: doc.id,
      routeName: encodeURI(title.toLowerCase()),
      title,
      items,
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged((userRef) => {
      unsubscribe();
      resolve(userRef);
    }, reject);
  });
};

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export { googleProvider };

export default firebase;
