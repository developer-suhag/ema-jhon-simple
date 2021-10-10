import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

// useFirebase custom hook
const useFirebase = () => {
  // states
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  // providers
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //   sign in with google
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign in with github
  const signInUsingGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };
  // sign in with email and password
  const loginWithEmail = (name, email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        // update user name

        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {
            setError(error.message);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
    console.log(email, password);
  };

  // login user
  const loggedUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  //   get currently sing in user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  //   log out
  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    user,
    signInUsingGoogle,
    signInUsingGithub,
    loginWithEmail,
    loggedUser,
    logOut,
  };
};

export default useFirebase;
