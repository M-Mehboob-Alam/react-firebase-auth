import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../firebase/firebase'

const Home = () => {
  const [user] = useAuthState(auth);
  return (
    <div>Home
      {user && <h1>you are loggedin {user.email}</h1>}
    </div>

    
  )
}

export default Home