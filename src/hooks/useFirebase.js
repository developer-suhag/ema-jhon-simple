import {
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
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

  const loginWithEmail = () => {};

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
    logOut,
  };
};

export default useFirebase;
