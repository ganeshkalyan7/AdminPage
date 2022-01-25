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

    let handleSubmit = ()=>{
        let newData = {Firstname,Lastname,Email,Designation};
        let newArray = [...props.detail.students];
        newArray.push(newData);
        console.log(newArray)
        props.detail.setStudents(newArray)

        navigate("/all-students")

    }

    return (
        <Form>

            <Form.Group className="mb-3">
                <Form.Label>FirstName</Form.Label>
                <Form.Control type="text" placeholder="FirstName" onChange={(e)=>setFirstname(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>LastName</Form.Label>
                <Form.Control type="text" placeholder="LastName" onChange={(e)=>setLastname(e.target.value)}/>
               
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
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
