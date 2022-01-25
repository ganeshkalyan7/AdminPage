import React from 'react';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {Link,useNavigate} from 'react-router-dom'


function AllStudents(props) {
    console.log(props)
    let navigate = useNavigate();
    let handleDelete=(i)=>{
      let newdata=[...props.detail.students]
      newdata.splice(i,1);
        props.detail.setStudents(newdata)
    }
    
  return <>
  <Table striped bordered hover variant="dark"> 
      <thead> 
      <tr>
      <th>S.no</th>
      <th>First Name</th>

      <th>Last Name</th>
      <th>Email</th>
      <th>Designation</th>
    </tr> 
    </thead>
      <tbody> 
          
              {
                  props.detail.students.map((e,i)=>{
                      return <tr key={i}>
                           <td>{i}</td>  
                          <td>{e.Firstname}</td>  
                          <td>{e.Lastname}</td>   
                          <td>{e.Email}</td>  
                          <td>{e.Designation}</td> 
                          <td> 
                            <Button  variant="danger" onClick={()=>handleDelete(i)}> delete </Button>
                            <span> </span>
                            <Button variant='primary' onClick={()=>{
                                            navigate('/edit-student/'+i)
                                        }}>Edit</Button>
                       


                            
                         </td> 
                         



                      </tr>


                  })


              }

        



      </tbody>
      
      
      
      
      </Table> 
  
  
  </>
}

export default AllStudents;
