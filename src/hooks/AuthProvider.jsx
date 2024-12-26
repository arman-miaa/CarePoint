import React, { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  ProviderId,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import Loading from "../pages/Loading";
import axios from "axios";
import { toast } from "react-toastify";

export const AuthContext = createContext();
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState([]);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const sigInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // get currect user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currectUser) => {
      setUser(currectUser);
     
      if (currectUser?.email) {
        const user = { email: currectUser?.email };
        axios
          .post("https://ph-assignment-11-server-brown.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            
            setLoader(false);
          });
      } else {
        axios
          .post(
            "https://ph-assignment-11-server-brown.vercel.app/logout",
            {},
            { withCredentials: true }
          )
          .then((res) => {
                  
           
            setLoader(false);
          });
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // logout suer
  const logOutUser = () => {
    
    return signOut(auth);
  };

  const updateUserProfile = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };

  const authInfo = {
    name: "arman mia",
    user,
    setUser,
    setLoader,
    createUser,
    signInUser,
    sigInWithGoogle,
    logOutUser,
    updateUserProfile,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>
        {loader ? (
          <div>
            <Loading></Loading>
          </div>
        ) : (
          children
        )}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
