import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';
import axios from 'axios';
const url="https://61f63d922e1d7e0017fd6d21.mockapi.io/students/";


function AllStudents() {
     let [students,setStudents] = useState([]);





//getdata method
  let getData=async()=>{
      try{
          let response=await axios.get(url)
          console.log(response)
          if(response.status===200){
            setStudents(response.data)
         }
         else{
             alert("internet server error!")
         }
        

      }
  
  catch(err){
    console.log(err)

   }
 }



    
    
    
 let handleDelete = async(i)=>{
     try{
         let response=await axios.delete(url+i)
         console.log(response.data)
         getData()
         console.log(getData())
     }
     catch(err){
         console.log(err)
     }
    
}

useEffect(()=>{
    getData()
  },[]);


    return <>
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>S.no</th>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Designation</th>
                </tr>
            </thead>
            <tbody>
                {
                students.map((e,id)=>{
                        return <tr key={id}>
                                    <td>{e.id}</td>
                                    <td>{e.Firstname}</td>
                                    <td>{e.Lastname}</td>
                                    <td>{e.Email}</td>
                                    <td>{e.Designation}</td>
                                    <td><Button variant='danger' onClick={()=>handleDelete(e.id)}>Delete</Button>
                                    <span>&nbsp; &nbsp;</span>
                                        <Link to={`/edit-student/${e.id}`}>
                                        <Button variant='primary'>Edit</Button>
                                        </Link>
                                      
                                        {/* <Button variant='primary' onClick={()=>{
                                            navigate('/edit-student/'+i)
                                        }}>Edit</Button> */}
                                    </td>
                                </tr>
                    })
                }
            </tbody>
        </Table>
    </>
}

export default AllStudents