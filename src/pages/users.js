

import { useState, useEffect } from "react";

import React from "react";

import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
const Users = () => {
    const [user, setUser] = useState([])
   
    useEffect(() => {
        axios.get(API_URL+"/users").then((response) => {
            setUser([...response.data]);
          
        });
      }, []);
    


    return (
    <>
<h3>Administrator records</h3>
    { user.map((elem)=>{return(
         <div style={{textTransform: "uppercase"}}>
                    
                  <h3>for user delete press the link </h3>
                   <h3> <a href="#">{elem.email}</a></h3>
                   <br/>
                   <br/>
                    </div>
                    
                    )
                  })}
                  </>


    )







}
export default Users;