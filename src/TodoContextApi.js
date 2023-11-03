import { useState, useEffect, useContext, createContext } from "react";
import { doc, setDoc, collection, onSnapshot, deleteDoc, updateDoc } from "firebase/firestore";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { db, auth } from "./firebase";

const context = createContext();

export function useValue() {
  const value = useContext(context);
  return value;
}

export default function TodoContextApi({ children }) {
  const [todos, setTodos] = useState([]);
  const [email, setEmail] = useState(null);

  // ============================ Getting Data from Firebase ==============
  useEffect(() => {
    if (email) {
      onSnapshot(collection(db, email), (snapShot) => {
        const data = snapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setTodos(data);
      });
    }
  }, [email]);

  // ============================ Pushing Todos into Firebase ==============
  async function handleAdd(title) {
    try {
      if (email) {
        const orderDocRef = doc(collection(db, email));
        await setDoc(orderDocRef, {
          title: title,
          completed: false,
          createdOn: new Date(),
        });
      }
    } catch (error) {
      console.error("Error in buyNow:", error);
    }
  }

  // ============================ Updating Todos ==========================
  function handleUpdateTodo(newTitle, id) {
    try {
      if (email) {
        const todoDocRef = doc(db, email, id);
        updateDoc(todoDocRef, {
          title: newTitle,
        });
      }
    } catch (error) {
      console.error("Error in handleUpdate:", error);
    }
  }

// ======================================Upadting Todos as completed
function handleUpdateTodoComp(id,comp) {
  try {
    if (email) {
      const todoDocRef = doc(db, email, id);
      updateDoc(todoDocRef, {
        completed:!comp 
      });
    }
  } catch (error) {
    console.error("Error in handleUpdate:", error);
  }
}

// ======================================Deleting Todo from the list=========================
//TODO create a function to delete a todo from the given id 
async function handleDelete(id) {
  try {
    if (email) {
      const todoDocRef = doc(db, email, id);
      await deleteDoc(todoDocRef);
    }
  } catch (error) {
    console.error("Error in handleDelete:", error);
  }
}


  // ============================ Taking User Details & unsubscribe ============================
  // Getting the userId and email when the user signs in
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setEmail(user.email);
      } else {
        setEmail(null);
      }
    });

    // Cleanup the subscription when the component unmounts
    return () => unsubscribe();
  }, []);

   //==============s======================================== Sign out the user========================
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("Signout was Successful");
      })
      .catch((err) => {
        console.error("Signout error:", err);
      });
  };

  return (
    <context.Provider
      value={{
        todos,
        handleAdd,
        handleUpdateTodo,
        handleDelete,
        userSignOut,
        handleUpdateTodoComp,
        email,
      }}
    >
      {children}
    </context.Provider>
  );
}
