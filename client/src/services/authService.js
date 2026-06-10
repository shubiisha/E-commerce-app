import { auth } from "../firebase/firebaseConfig";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

// REGISTER
export const registerUser = async (email, password) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

// LOGIN
export const loginUser = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

// LOGOUT
export const logoutUser = async () => {
  return await signOut(auth);
};
