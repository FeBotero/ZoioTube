import { createContext, ReactNode, useEffect, useState } from "react";
import {  getAuth,signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../services/firebase";


const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    'login_hint': 'user@example.com'
  });

provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

type User = {
    id: string;
    name: string;
    avatar: string;
  }

type AuthContextProviderProps = {
    children: ReactNode;
}

type AuthContextType = {
    user: User | undefined;
    singInWhithGoogle: () => Promise<void>;
}
export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {

    const [user, setUser] = useState<User>();


    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user=>{
            if(user){
                const {displayName,photoURL,uid} = user
                if(!displayName||!photoURL){
                    throw new Error("Missing information from Google Account")
                }

                setUser({
                    id:uid,
                    name:displayName,
                    avatar:photoURL
                })
            }
        })
        return()=>{
            unsubscribe()
        }
    },[])

    async function singInWhithGoogle(){
        const provider = new GoogleAuthProvider()
        const auth = getAuth()

        const result = await signInWithPopup(auth,provider)
        
        if (result.user) {
            const { displayName, photoURL, uid } = result.user;
      
            if (!displayName || !photoURL) {
              throw new Error('Missing information from Google Account.')
            }
      
            setUser({
              id: uid,
              name: displayName,
              avatar: photoURL
            })
          }
        }
      
        return (
            <AuthContext.Provider value={{ user, singInWhithGoogle }}>
              {props.children}
            </AuthContext.Provider>
          );
    }


    // signInWithPopup(auth, provider)
    // .then((result) => {
    //   const credential = GoogleAuthProvider.credentialFromResult(result);
    //   const token = credential?.accessToken;
    //   const user = result.user;
    //   console.log(user)
    // }).catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   const email = error.customData.email;
    //   const credential = GoogleAuthProvider.credentialFromError(error);
      
    // })

