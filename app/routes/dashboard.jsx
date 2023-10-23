import {
    Link,
    Meta,
    Outlet,
    Scripts,
    LiveReload
  } from "@remix-run/react";

  import dashboard from "../styles/dashboard.css";

  export function links(){
      return [
          
          { rel: "stylesheet", href: dashboard },
      ]
    
      
  
  
  }
  export default function Dashboard(){
    return(
        <>
        <h1 className="testing">Dashboard</h1>
        
        </>
    )

}