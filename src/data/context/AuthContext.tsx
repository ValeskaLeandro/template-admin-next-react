import User from "@/model/User"
import firebase from "../../firebase/config"
import { createContext, useState } from "react"
import route from "next/router"

interface AuthContextProps{
  user: User | null
  loginGoogle: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

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
export function AuthProvider(props: any) {
  const [user, setUser] = useState<User | null>(null);

  async function loginGoogle() {
    const response = await firebase.auth().signInWithPopup(
      new firebase.auth.GoogleAuthProvider()
    )
    if (response.user?.email) {
      const user = await normalUser(response.user);
      setUser(user);
      route.push("/");
    }
  }
  return(
    <AuthContext.Provider value={{
      user,
      loginGoogle
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}
export default AuthContext