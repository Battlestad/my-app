import React, {useState} from "react";
import Axios from "axios";

import {TextField, Button, Checkbox} from '@mui/material';
import { KeyboardArrowRight } from '@mui/icons-material';

function PostForm() {

    const url = "http://localhost:8080/persons";
    const [data, setData] = useState({
        name: "",
        address: "",
        postnr: "",
        place: "",
        mobile: "",
        email: "",
        birthDate: "",
        marketingAllowed: ""
    })

    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            name: data.name,
            address: data.address,
            postnr: data.postnr,
            place: data.place,
            mobile: data.mobile,
            email: data.email,
            birthDate: data.birthDate,
            marketingAllowed: data.marketingAllowed
        })
        .then(res=>{
            console.log(res.data)
        })
    }

    function handle(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    function handleCheckbox(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.checked
        setData(newdata)
        console.log(newdata)
    }

    return (
      <div>
        <form onSubmit={(e)=> submit(e)}>
            <br/>
            <TextField onChange={(e)=>handle(e)} id="name" label="Navn" value={data.name}  /><br/><br/>
            <TextField onChange={(e)=>handle(e)} id="address" label="Adresse" value={data.address} /><br/><br/>
            <TextField onChange={(e)=>handle(e)} id="postnr" type="number" label="Postnr." value={data.postnr} /><br/><br/>
            <TextField onChange={(e)=>handle(e)} id="place" label="Poststed" value={data.place} /><br/><br/>
            <TextField onChange={(e)=>handle(e)} id="mobile" type="number" label="Telefon" value={data.mobile} /><br/><br/>
            <TextField onChange={(e)=>handle(e)} type="email" id="email" label="E-post" value={data.email} /><br/><br/>
            <TextField onChange={(e)=>handle(e)} 
            id="birthDate"
            label="Fødselsdato"
            type="date"
            sx={{ width: 220 }}
            InputLabelProps={{
                shrink: true,
            }}
            value={data.birthDate}
            />
            <br/>
            Tillat markedsføring<Checkbox onChange={(e)=>handleCheckbox(e)} id="marketingAllowed" value={data.marketingAllowed}/>
            <br/>
            <Button
                type="submit"
                variant="contained"
                endIcon={<KeyboardArrowRight />}
            >
                Lagre
            </Button>
        </form>

      </div>
    )
}

export default PostForm