import { getAuth, GithubAuthProvider, signOut } from 'firebase/auth';
import './App.css';
import app from './firebase.init';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from 'react';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then(result => {
        const user = result.user;
        setUser(user);
        console.log(user);
      }).catch(error => {
        console.log(error);
      })
  }

  const handleGitSign = () => {
    signInWithPopup(auth, gitProvider)
      .then(result => {
        setUser(result.user);
        console.log(result.user);
      }).catch(error => {
        console.log(error);
      })
  }

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        console.log('sign out');
      }).catch(error => {
        console.log(error);
      })
  }
  return (
    <div className="App">
      {
        (user.email) ? <button onClick={handleSignOut}>Sign Out</button>
          :
          <>
            <button onClick={handleGoogleSignIn}>Sign in Google</button>
            <button onClick={handleGitSign}>Sign in Git Hub</button>
          </>
      }
      <p>{user.displayName}</p>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
