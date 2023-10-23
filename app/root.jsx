import {
    Links,
    Meta,
    Outlet,
    Scripts,
    LiveReload
  } from "@remix-run/react";
  
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFTyOJTIdPl-KFZP8l2rm3uOd-cNVFV00",
  authDomain: "futbolymaspod.firebaseapp.com",
  projectId: "futbolymaspod",
  storageBucket: "futbolymaspod.appspot.com",
  messagingSenderId: "171488147332",
  appId: "1:171488147332:web:248043023c7d7198460fd1",
  measurementId: "G-KJDVY3Z3PS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);

  import { cssBundleHref } from "@remix-run/css-bundle";
  //import { LinksFunction } from "@remix-run/node";
  // existing imports
  
  import x from "./styles/app.css";
  



  export function links(){
    return [
    { rel: "stylesheet", href: x },
    ]
  }
  
  export default function App() {
    return (
      <html>
        <head>
          <link
            rel="icon"
            href="data:image/x-icon;base64,AA"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
         
          <Meta />
          <Links />
        </head>
        <body>
          
          <Outlet />
  
          <Scripts />
          <LiveReload />

        </body>
      </html>
    );
  }
  