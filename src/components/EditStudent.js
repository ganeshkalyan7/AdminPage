import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useParams,useNavigate} from 'react-router-dom';
import axios from "axios"



function EditStudent(props) {
    const url="https://61f63d922e1d7e0017fd6d21.mockapi.io/students/"

    let params = useParams();
    let navigate = useNavigate();
    let [Firstname,setFirstname]=useState("");
    let [Lastname,setLastname]=useState("");
    let [Email,setEmail]=useState("");
    let [Designation,setDesignation]=useState("");

  //requesting for api in json formate
    let getData = async()=>{
        try{
            let response=await axios.get(url+params.id)
            console.log(response)
            setFirstname=(response.data.Firstname)
            setLastname=(response.data.Lastname)
            setEmail=(response.data.Email)
            setDesignation=(response.data.data)
        }
       
        catch(err){
            console.log(err)
        }
        }

    
       

   //editing functionality
    let handleSubmit =async()=>{
        try{
            let response=await axios.put(url+params.id,{
                Firstname,
                Lastname,
                Email,
                Designation

            })
            console.log(response)
            if(response.status===200){
                navigate('/all-students')
            }
        }
      

        catch(err){
            console.log(err)
        }
 }

 useEffect(()=>{
    getData()
   
    },[])


    return (
        <Form>

            <Form.Group className="mb-3">
                <Form.Label>Firstname</Form.Label>
                <Form.Control value={Firstname} type="text" placeholder="Firstname" onChange={(e)=>setFirstname(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Lastname</Form.Label>
                <Form.Control value={Lastname} type="Lastname" placeholder="Lastname" onChange={(e)=>setLastname(e.target.value)}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control value={Email} type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Designation</Form.Label>
                <Form.Control value={Designation} type="text" placeholder="Designation" onChange={(e)=>setDesignation(e.target.value)}/>
            </Form.Group>
  
            <Button variant="primary" onClick={handleSubmit}>
                Update
            </Button>
        </Form>
    )
}

export default EditStudent