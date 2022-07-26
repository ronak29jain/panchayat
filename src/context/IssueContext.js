import { useContext, createContext, useState, useEffect } from "react";
import { db } from "../firebase";
import { doc, collection, getDocs, addDoc, updateDoc, deleteDoc} from "firebase/firestore";
import { UserAuth } from "./Authcontext";

const IssueContext = createContext();

export const IssueContextProvider = ({children}) => {

  const [issues, setIssues] = useState([]);
  const [updateIssues, setUpdateIssues] = useState(false);
  const { user } = UserAuth();

  const addI = async(text, setText, image, setImage) => {
    const issuesConllectionRef = collection(db, "issues")
    await addDoc(issuesConllectionRef, {
      avatar: user.photoURL,
      image: image,
      name: user.displayName,
      sirpanch: user.emailVerified, 
      text: text,
      username: "",
      email: user.email,
    }).then(() => {setUpdateIssues(!updateIssues);})
    setText("");
    setImage("");
  }

  const updateI = async(id, updatedtext, updatedimgurl, closeModal) => {
    const userDoc = doc(db, 'issues', id)
    const updatedfield = {
      text: updatedtext,
      image: updatedimgurl
    }
    await updateDoc(userDoc, updatedfield).then(() => {setUpdateIssues(!updateIssues);})
    closeModal();
  }
  
  
  const deleteI = async(id, closeModal) => {
    const userDoc = doc(db, 'issues', id)
    await deleteDoc(userDoc).then(() => {setUpdateIssues(!updateIssues);})
    closeModal();
  }

  useEffect(() => {
    const getIssues = async () => {
      const issuesCollectionRef = collection(db, "issues")
      const data = 
        await getDocs(issuesCollectionRef)
      setIssues(data.docs.map((doc) => ({...doc.data(), id: doc.id}) ))
    }
    getIssues();
  },[updateIssues])

  return (
    <IssueContext.Provider value={{ issues, addI, updateI, deleteI}} >
      {children}
    </IssueContext.Provider>
  )
}

export const IssueHandling = () => {
  return useContext(IssueContext)
}