import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useNavigate} from 'react-router-dom';


function AddStudents(props) {
   

  

    let navigate = useNavigate();
    let [Firstname,setFirstname]=useState("");
    let [Lastname,setLastname]=useState("");
    let [Email,setEmail]=useState("");
    let [Designation,setDesignation]=useState("");
    const url = "https://61ee1f7ed593d20017dbac50.mockapi.io/students/"
    

    let handleSubmit = async()=>{
        await fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                Firstname,
                Lastname,
                Email,
                Designation
            })
        })
        .then(response=>response.json())
        .then(res=>{
            console.log(res)
            navigate("/all-students")
        })
        .catch(err=>{
            console.log(err)
        })

    }

    return (
        <Form>

            <Form.Group className="mb-3">
                <Form.Label>Firstname</Form.Label>
                <Form.Control type="text" placeholder="Firstname" onChange={(e)=>setFirstname(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Lastname</Form.Label>
                <Form.Control type="text" placeholder="Lastname" onChange={(e)=>setLastname(e.target.value)}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Designation</Form.Label>
                <Form.Control type="text" placeholder="Designation" onChange={(e)=>setDesignation(e.target.value)}/>
            </Form.Group>
  
            <Button variant="primary" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    )
}

export default AddStudents