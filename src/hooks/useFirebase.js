import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import initialAuthentication from "../firebase/firebase.init";
initialAuthentication();

const useFirebase = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState({});
  const [authError, setAuthError] = useState("");
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const signInGoogle = () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        const user = res.user;
        setUser(user);
        const destination = location?.state?.from || "/";
        navigate(destination);
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setLoading(false));
  };

  //logu out

  const logOut = () => {
    setLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
        alert('Logout Successfully')
      })
      .catch((error) => {
        setAuthError(error);
      })
      .finally(() => setLoading(false));
  };

  //auth observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  return { user, authError, signInGoogle, loading, logOut };
};

export default useFirebase;
