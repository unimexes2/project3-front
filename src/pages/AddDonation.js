

import { useState, useEffect } from "react";

import React from "react";

import axios from "axios";
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


    axios.post("http://localhost:3000/adddonation", body).then((response) => {
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
                <label className="labelLeftBold">account</label>
                <input
                    className="form-control"
                    type="text"             
                    name="bankName"
                    onChange={(e) => setAccount(e.target.value)}
                    value={account}
                />
            </div>
            <div className="displaystory" style={{ "maxWidth": "600px" }}>
                <label className="labelLeftBold">bankName</label>
                <input
                    className="form-control"
                    type="text"             
                    name="bankName"
                    onChange={(e) => setBankName(e.target.value)}
                    value={bankName}
                />
            </div><div className="displaystory" style={{ "maxWidth": "600px" }}>
                <label className="labelLeftBold">paypal</label>
                <input
                    className="form-control"
                    type="text"             
                    name="paypal"
                    onChange={(e) => setPaypal(e.target.value)}
                    value={paypal}
                />
            </div><div className="displaystory" style={{ "maxWidth": "600px" }}>
                <label className="labelLeftBold">bizum</label>
                <input
                    className="form-control"
                    type="text"             
                    name="bizum"
                    onChange={(e) => setBizum(e.target.value)}
                    value={bizum}
                />
            </div>


      
 
 

            <button type="submit" className="btn-success">
                Save to server
            </button>

        </form>




    </div>



    )







}
export default AdDonation;