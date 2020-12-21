import React,{useState} from 'react'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import { navigate } from '@reach/router';
import firebase from "gatsby-plugin-firebase"
export var showBlog=false;
export default () => {
     var [state, setstate] = useState(false)
     var uiConfig:any = {
        signInFlow: "popup",
        signInOptions: [
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        callbacks: {
          signInSuccess: () =>{
            firebase.auth().onAuthStateChanged(user => {
              setstate(!!user)
              showBlog=true;
              navigate('/')
            })
           
          }
        }
      }
    
    return (
     
        <div>
           {state ? (
          <span>
            {/* <div>Signed In!</div>
            <button onClick={() => firebase.auth().signOut()}>Sign out!</button> */}
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
        </div>
    
    )
}
