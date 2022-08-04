

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


      const deleteUser = (id) => {
        console.log(id, "llega");
        axios
          .delete(API_URL+"/user/" + id.target.id)
          .then(() => {})
          .catch((err) => console.log(err));
      };
    


    return (
    <>
<h3>Administrator records</h3>
    { user.map((elem)=>{return(
         <div style={{textTransform: "uppercase"}}>
                    
                  <h3>for user delete press the link </h3>
                  {console.log(elem)}
                   <h3><form id={elem._id} onSubmit={deleteUser}
                                     
                   > {elem.email}
                   <button type="submit">Delete</button>
                   </form>
                   
                   </h3>
                   <br/>
                   <br/>
                    </div>
                    
                    )
                  })}
                  </>


    )







}
export default Users;