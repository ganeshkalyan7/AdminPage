import React,{useContext} from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'
import {StudentContext} from '../App'
function AllStudents() {

    let context = useContext(StudentContext)
    console.log(context)
    
    let handleDelete = (i)=>{
        let newArray = [...context.students]
        newArray.splice(i,1);
        context.setStudents(newArray)
    }

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
                    context.students.map((e,i)=>{
                        return <tr key={i}>
                                    <td>{i+1}</td>
                                    <td>{e.Firstname}</td>
                                    <td>{e.Lastname}</td>
                                    <td>{e.Email}</td>
                                    <td>{e.Designation}</td>
                                    <td><Button variant='danger' onClick={()=>handleDelete(i)}>Delete</Button>
                                    <span>&nbsp; &nbsp;</span>
                                        <Link to={`/edit-student/${i}`}>
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