import User from "@/model/User"
import firebase from "../../firebase/config"
import { createContext, useEffect, useState } from "react"
import route from "next/router"
import Cookies from 'js-cookie'

interface AuthContextProps{
  user: User | null
  loading?: boolean
  loginGoogle: () => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  loginGoogle: function (): Promise<void> {
    throw new Error("Function not implemented.")
  },
  logout: function (): Promise<void> {
    throw new Error("Function not implemented.")
  }
})

async function normalUser(firebaseUser: firebase.User): Promise<User>{
  const token = await firebaseUser.getIdToken()
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0]?.providerId,
    imageUrl: firebaseUser.photoURL
  }
}

function manageCookie(logged: boolean) {
  if(logged) {
    Cookies.set('admin-template-vls-auth', logged.toString(), {
      expires: 7 //days
    })
  } else {
    Cookies.remove('admin-template-vls-auth')
  }
}
export function AuthProvider(props: any) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  async function sessionConfig(firebaseUser: any) {
    if(firebaseUser?.email) {
      const user = await normalUser(firebaseUser);
      setUser(user)
      manageCookie(true)
      setLoading(false)
      return user.email
    } else {
      setUser(null)
      manageCookie(false)
      setLoading(false)
      return false
    }
  }  

  async function loginGoogle() {
    try {
      setLoading(true)
      const response = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
      sessionConfig(response.user)
      route.push("/"); 
    } finally {
      setLoading(false)
    }   
  }

  async function logout(){
    try {
      setLoading(true)
      await firebase.auth().signOut()
      await sessionConfig(null)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if(Cookies.get('admin-template-vls-auth')){
      const cancel = firebase.auth().onIdTokenChanged(sessionConfig)
      return () => cancel()
    } else {
      setLoading(false)
    }    
  }, [])
  return(
    <AuthContext.Provider value={{
      user,
      loading,
      loginGoogle,
      logout
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContext