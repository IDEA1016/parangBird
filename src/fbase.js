import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// firebase 환경변수 설정
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGIN_ID,
  appId: process.env.REACT_APP_APP_ID,
};

// firebase 초기화
const firebaseApp = initializeApp(firebaseConfig);
export const authService = getAuth(firebaseApp);

// firebase 인증 관련 함수
export const _createUserWithEmailAndPassword = ({ email, password }) => {
  return createUserWithEmailAndPassword(authService, email, password);
};
export const _signInWithEmailAndPassword = ({ email, password }) => {
  return signInWithEmailAndPassword(authService, email, password);
};
