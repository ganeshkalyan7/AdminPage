import React,{useState,useEffect} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {useParams,useNavigate} from 'react-router-dom';

function EditStudent(props) {

 
    let params = useParams();
    let navigate = useNavigate();
    let [Firstname,setFirstname]=useState("");
    let [Lastname,setLastname]=useState("");
    let [Email,setEmail]=useState("");
    let [Designation,setDesignation]=useState("");


  


    useEffect(()=>{
        if(params.id<props.detail.students.length)
        {
            setFirstname(props.detail.students[params.id].Firstname)
            setLastname(props.detail.students[params.id].Lastname)
            setEmail(props.detail.students[params.id].Email)
            setDesignation(props.detail.students[params.id].Designation)
        }
        else
        {
            alert("Selected Students is Not available") 
        }
    },[params.id,props.detail.students.length])

    
    let handleSubmit = ()=>{
        let newData = {Firstname,Lastname,Email,Designation};
        let newArray = [...props.detail.students];
        newArray.splice(params.id,1,newData)
        props.detail.setStudents(newArray)
        navigate("/all-students")

    }


    return (
        <Form>

            <Form.Group className="mb-3">
                <Form.Label>Firstname</Form.Label>
                <Form.Control value={Firstname} type="text" placeholder="Firstname" onChange={(e)=>setFirstname(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Lastname</Form.Label>
                <Form.Control value={Lastname} type="email" placeholder="Lastname" onChange={(e)=>setLastname(e.target.value)}/>
                
            </Form.Group>

            <Form.Group className="mb-3" >
                <Form.Label>Email</Form.Label>
                <Form.Control value={Email} type="text" placeholder="Email" onChange={(e)=>setEmail(e.target.value)}/>
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
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
export default EditStudent;