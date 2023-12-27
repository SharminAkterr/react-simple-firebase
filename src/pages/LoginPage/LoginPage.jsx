import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.init';
import { useState } from 'react';

const LoginPage = () => {

    const [user, setUser] = useState("");

    const auth = getAuth(app);
    // console.log(app)
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();


    // google login
    const handleGoogleSignIn = () => {
        console.log('sign in clicked')
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                setUser(loggedInUser)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }


    // all sign out
    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.log(error)
            })
    }

    // GitHub login
    const handleGitHubLogIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                setUser(result.user);
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            {user && <div>
                <img src={user.photoURL} alt="" />
                <h3>{user.displayName}</h3>
                <h4>Email: {user.email}</h4>
                <h5>Phone: {user.phoneNumber}</h5>
            </div>}

            {
                user ? <button onClick={handleGoogleSignOut}>Sign Out</button> :
                    <>
                        <button onClick={handleGoogleSignIn}>Google Login</button>

                        <button onClick={handleGitHubLogIn}>GitHub Login</button>
                    </>
            }
        </div>
    );
};

export default LoginPage;