import { useContext, createContext, useEffect, useState } from "react";

import { auth } from '../firebase';
import { 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateEmail,
  updatePassword,
  deleteUser,
  // promptForCredentials,
  // EmailAuthCredential, 
  EmailAuthProvider,
  reauthenticateWithCredential
} from "firebase/auth";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

  const [user, setUser] = useState(null)
  // const [user0, setUser0] = useState({})

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  }

  const googleSignOut = () => {
    return signOut(auth)
    // console.log('user loged out')
  }

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then(() =>{
        console.log('created user')
      })
  }
  
  const addName = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name, 
      photoURL: photo,
    }).then(() => {
      console.log('updated name');
      // Profile updated!
      // ...
    }).catch((error) => {
      console.log('error in the update profilesection. name: ', error)
      console.log('error in the update profilesection. error: ', error)
      // An error occurred
      // ...
    });
    // setUser0(auth.currentUser)
  }

  const emailverification = () => {
    return sendEmailVerification(auth.currentUser)
    // console.log('verification email sended to: ', user.email)
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        console.log("form signinwithemailandpassword fn (Authcontext.js), userCredential: ", userCredential);
        // ...
      })
      // .then(() => {
      //   console.log('user is signed in using email and password "Authcontext.js".')
      // }).catch((error) => {
      //   console.log('error in logIn function from "Authcontext.js" file', error)
      // });
  }

  const getLinkForResettingPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  } 

  const updateUserEmail = (updatedEmail) => {
    return updateEmail(auth.currentUser, updatedEmail)
  }

  const updateUserPassword = (newPassword) => {
    return updatePassword(user, newPassword)
  }

  const deleteAccount = () => {
    return deleteUser(user);
  }

  const userAuthentication = (password) => {
    // const credential = promptForCredentials();
    // const credential = new EmailAuthCredential().then(()=> {console.log('email auth provider')});
    // const credential = new EmailAuthCredential().then(()=> {console.log('email auth provider')});
    var credential = EmailAuthProvider.credential(user.email, password);
    // return EmailAuthProvider().then(()=>console.log('email auth provider'));
    // const credential = (user.email, password);
    return reauthenticateWithCredential(user, credential)
      // .then(() => (console.log('user authenticated')));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged( auth, (currentUser) => {
      setUser(currentUser)
      console.log("User (from Authcontext): ", user)
      // console.log("User Display Name (from Authcontext): ", user?.displayName)
    })
    return () => {
      unsubscribe()
      // setUser0(auth.currentUser)
      // console.log('auth.currentUser: ', auth.currentUser)
    }
  }, [user, user?.displayName])

  return (
    <AuthContext.Provider value={{ googleSignIn, googleSignOut, user, createUser, addName, signIn, emailverification, getLinkForResettingPassword, updateUserEmail, updateUserPassword, deleteAccount, userAuthentication }} >
      {children}
    </AuthContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(AuthContext)
}