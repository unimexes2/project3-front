

import { useState, useEffect } from "react";

import React from "react";

import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
const AdDonation = () => {
    const [foto, setFoto] = useState([])
    const fotoArr = [];

    const [bankName, setBankName] = useState("");
    const [account, setAccount] = useState("");
    const [paypal, setPaypal] = useState("");
    const [bizum, setBizum] = useState("");
   

    const handleSubmit = (e) => {
        e.preventDefault();
        const body = {
            bankName: bankName,
            account: account,
            paypal: paypal,
            bizum: bizum
        };


    axios.post(API_URL+"/adddonation", body).then((response) => {
            console.log(response, "resp")
            setBankName("");
            setAccount("");
            setPaypal("");
            setBizum("")

        });
    };


 

    return (<div className="inputreturn">
        <form className="displaystory" onSubmit={handleSubmit}>
          
         
            <div className="displaystory" style={{ "maxWidth": "600px" }}>
                <label className="labelLeftBold">BANK NAME</label>
                <input
                    className="form-control"
                    type="text"             
                    name="bankName"
                    onChange={(e) => setBankName(e.target.value)}
                    value={bankName}
                />
            </div>
            
            
            <div className="displaystory" style={{ "maxWidth": "600px" }}>
                <label className="labelLeftBold">ACCOUNT NUMBER</label>
                <input
                    className="form-control"
                    type="text"             
                    name="bankName"
                    onChange={(e) => setAccount(e.target.value)}
                    value={account}
                />
            </div>
            
            <div className="displaystory" style={{ "maxWidth": "600px" }}>
                <label className="labelLeftBold">PAYPAL (ENLASE A LA PAGINA DE RECAUDACION DE FONFOSS) </label>
                <input
                    className="form-control"
                    type="text"             
                    name="paypal"
                    onChange={(e) => setPaypal(e.target.value)}
                    value={paypal}
                />
            </div><div className="displaystory" style={{ "maxWidth": "600px" }}>
                <label className="labelLeftBold">TEAMING NET ANLACE AL PROYECTO</label>
                <input
                    className="form-control"
                    type="text"             
                    name="bizum"
                    onChange={(e) => setBizum(e.target.value)}
                    value={bizum}
                />
            </div>


      
 
 
            <button type="submit" className="btn btn-primary" style={{margin :"auto" ,color:"white",  marginBottom:"10px"}}>
                Save to server
            </button>

        </form>




    </div>



    )







}
export default AdDonation;