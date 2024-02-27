

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';


import AdminMenu from './components/adminMenu/AdminMenu'
import Admin from './pages/admin/Admin';
// import Login from './pages/login/Login'

function App() {


  return (
    <BrowserRouter>
    <div className="App" >
      <Routes>
        <Route
          path="/*"
          element={
            <div>
              <AdminMenu />
  
              <div className="main-content">
                <Routes>
                <Route path="/" element={<Admin/>} />
                
                 
                </Routes>
              </div>
            </div>
          }
        />
      </Routes>
    </div>
  </BrowserRouter>
  )
}

export default App
