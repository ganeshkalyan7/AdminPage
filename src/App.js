import './App.css';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard';
import AllStudents from './components/AllStudents';
import AddStudents from './components/AddStudents';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useState} from 'react'
import EditStudent from './components/EditStudent'
function App() {
  let [students,setStudents]=useState([
    {
      Firstname:"ganesh",
      Lastname:"cristiano",
      Email:"ganeshkalyan506@gmail.com",
      Designation:"full stack web_developer"
    
    },
    {
      Firstname:"yugendar",
      Lastname:"paarivendhan",
      Email:"yugipop@gmail.com",
      Designation:"self_employee"
    
    },
    {
      Firstname:"siva",
      Lastname:"jilla",
      Email:"sivajilla@gmail.com",
      Designation:"self employee"
    
    },
    {
      Firstname:"vicky",
      Lastname:"Mac",
      Email:"vickyMac@gmail.com",
      Designation:"D-FARM"
    
    },
    {
      Firstname:"sanjay",
      Lastname:"kumar",
      Email:"sanjaykumar@gmail.com",
      Designation:"employee"
    
    },
    
    
    {
      Firstname:"rahul",
      Lastname:"choudri",
      Email:"rahulchoudri@gmail.com",
      Designation:"C.A"
    
    },

    {
    
    Firstname:"jeeva",
    Lastname:"nandham",
    Email:"vjeeva@gmail.com",
    Designation:"treveller"
   },



  ])
  return <>
    <BrowserRouter>
        <div style={{display:"grid",gridTemplateColumns:"17% 83%"}}>
            <div >
                <Sidebar/>
            </div>
            <div>
                <Routes>
                <Route path='/dashboard' element={<Dashboard />}/>
                      <Route path ='/all-students' element={<AllStudents detail={{students,setStudents}}/>}/>
                      <Route path = '/add-student' element={<AddStudents detail={{students,setStudents}}/>}/>
                      <Route path ='/edit-student/:id' element={<EditStudent detail={{students,setStudents}}/>}/>
                      <Route path = '/' element={<Dashboard />}/>
                </Routes>
            </div>
        </div>
    </BrowserRouter>
  </>
}

export default App;