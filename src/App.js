import './App.css';
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard';
import AllStudents from './components/AllStudents';
import AddStudents from './components/AddStudents';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EditStudent from './components/EditStudent'





function App() {
  

  let data = {
    earning:"40,000",
    annual:"2,40,000",
    task:20,
    pending:26

  }

 

  return <>
    <BrowserRouter>
      
        <div style={{display:"grid",gridTemplateColumns:"20% 80%"}}>
            <div >
                <Sidebar/>
            </div>
            <div>
           
                <Routes>
                <Route path='/dashboard' element={<Dashboard data={data}/>}/>
                      <Route path ='/all-students' element={<AllStudents/>}/>
                      <Route path = '/add-student' element={<AddStudents/>}/>
                      <Route path ='/edit-student/:id' element={<EditStudent/>}/>
                      <Route path='/' element={<Dashboard data={data}/>}/>
                </Routes>
              
            </div>
        </div>
    </BrowserRouter>
  </>
}

export default App;