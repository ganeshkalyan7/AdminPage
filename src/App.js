import './App.css';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard';
import AllStudents from './components/AllStudents';
import AddStudents from './components/AddStudents';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditStudent from './components/EditStudent'
import React,{useState} from 'react'

export const StudentContext = React.createContext();

function App() {

  let data = {
    earning:"40,000",
    annual:"2,40,000",
    task:20,
    pending:26

  }

 let [students,setStudents] = useState([
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

  ]);

  return <>
    <BrowserRouter>
      
        <div style={{display:"grid",gridTemplateColumns:"20% 80%"}}>
            <div >
                <Sidebar/>
            </div>
            <div>
            <StudentContext.Provider value={{students,setStudents}}>
                <Routes>
                <Route path='/dashboard' element={<Dashboard data={data}/>}/>
                      <Route path ='/all-students' element={<AllStudents/>}/>
                      <Route path = '/add-student' element={<AddStudents/>}/>
                      <Route path ='/edit-student/:id' element={<EditStudent/>}/>
                      <Route path='/' element={<Dashboard data={data}/>}/>
                </Routes>
              </StudentContext.Provider>
            </div>
        </div>
    </BrowserRouter>
  </>
}

export default App;