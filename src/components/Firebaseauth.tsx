import React,{useState} from 'react'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { navigate } from '@reach/router';
import firebase from "gatsby-plugin-firebase"
import "firebase/auth"
export var showBlog=false;
export default () => {
     var [state, setstate] = useState(false)
    function getUiConfig(auth):any {
        return {
          signInFlow: 'popup',
          signInOptions: [
            auth.GoogleAuthProvider.PROVIDER_ID,
            auth.EmailAuthProvider.PROVIDER_ID
          ],
          // signInSuccessUrl: '/app/profile',
          callbacks: {
            signInSuccessWithAuthResult: (result) => {
            //   setUser(result.user);
                setstate(!!result)
                showBlog=true;
              navigate('/');
            }
          }
        };
      }
    
    
    return (
     
        <div>
           {state ? (
          <span>
            {/* <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button> */}
          </span>
        ) : (
          <div>
           <p style={{textAlign:"center"}}>Signin to show more blog post</p> 
          <StyledFirebaseAuth
            uiConfig={getUiConfig(firebase.auth)}
            firebaseAuth={firebase.auth()}
          />
          </div>
        )}
        </div>
    
    )
}
