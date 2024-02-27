import './adminmenu.scss';
import { Link } from 'react-router-dom'
import { MdAnalytics, MdOutlineSettingsApplications } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { MdPerson3 } from "react-icons/md";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import HelpIcon from '@mui/icons-material/Help';
import { Button, Drawer } from '@mui/material';
import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const AdminMenu = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };

    const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
  <List>
    <div className="adminmobilemenu">
      <div className="logo">
        <img src='https://play-lh.googleusercontent.com/7dEutcldv1tEO3wSwcZsTMBbaG2DwsStkwg0IqAI3DpTolJGLFNjfhvOKV5GlvmZwng' alt="" />
      </div>
      <div className="items">
        <div className="item">
          <ListItemButton component={Link} to='/' className='listItem'>
            <ListItemIcon><MdOutlineSettingsApplications className='icon' /></ListItemIcon>
            <ListItemText primary="Administartion" />
          </ListItemButton>
        </div>
        <div className="item">
          <ListItemButton component={Link} to='/' className='listItem'>
            <ListItemIcon><MdAttachMoney className='icon' /></ListItemIcon>
            <ListItemText primary="Teacher Salary" />
          </ListItemButton>
        </div>
        <div className="item">
          <ListItemButton component={Link} to='/' className='listItem'>
            <ListItemIcon><MdPerson3 className='icon' /></ListItemIcon>
            <ListItemText primary="Student Fee" />
          </ListItemButton>
        </div>
        <div className="item">
          <ListItemButton component={Link} to='/' className='listItem'>
            <ListItemIcon><MdAnalytics className='icon' /></ListItemIcon>
            <ListItemText primary="Analysis" />
          </ListItemButton>
        </div>
        <div className="line"></div>
        <div className="item">
          <ListItemButton component={Link} to='/' className='listItem'>
            <ListItemIcon><ExitToAppIcon /></ListItemIcon>
            <ListItemText primary="Sign Out" />
          </ListItemButton>
        </div>
        <div className="item">
          <ListItemButton component={Link} to='/' className='listItem'>
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText primary="Help" />
          </ListItemButton>
        </div>
      </div>
    </div>
  </List>
  <Divider />
  
</Box>
    )
    const [isSubMenuOpen, setIsSubMenuOpen] = React.useState(false);

    // Function to toggle the submenu visibility
    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };
  return (
    <>
    <div className='hlo' style={{ display: 'flex',padding:'20px' }}>
    <Button  onClick={toggleDrawer(true)}>
                        <MenuIcon/>
                    </Button>
    </div>
  
 
   <div className='adminmenu'>
    

        <div className="logo">
         <img src='https://play-lh.googleusercontent.com/7dEutcldv1tEO3wSwcZsTMBbaG2DwsStkwg0IqAI3DpTolJGLFNjfhvOKV5GlvmZwng' alt="" />
         </div>

  

         <div className="items">
          <div className="item">
      <Link to='/' className='listItem' onClick={toggleSubMenu}>
      <MdOutlineSettingsApplications className='icon'  /> 
  
      <h3>Administartion</h3>
      </Link>
      {isSubMenuOpen && (
                <div className="submenu">
                   <Link to='/' className='sublink'>
                    <h5>Add Teacher</h5>
                   </Link >
                   <Link to='/' className='sublink'>
                    <h5>Add Class</h5>
                   </Link>
                   <Link to='/' className='sublink'>
                    <h5>Asign Subject</h5>
                   </Link>
                   <Link to='/' className='sublink'>
                    <h5>Add Subjects</h5>
                   </Link>
                   <Link to='/' className='sublink'>
                    <h5>Add Exam</h5>
                   </Link>
                </div>
            )}
          </div>
          <div className="item">
      <Link to='/' className='listItem'>
      <MdAttachMoney  className='icon'  /> 
      <h3>Teacher Salary</h3>
      </Link>
          </div>
          <div className="item">
      <Link to='/' className='listItem'>
      <MdPerson3   className='icon' /> 
      <h3>Student Fee</h3>
      </Link>
          </div>
          <div className="item">
      <Link to='/' className='listItem'>
      <MdAnalytics className='icon'  /> 
      <h3>Analysis</h3>
      </Link>
          </div>
         
          <div className="line"></div>
          <div className="item">
      <Link to='/' className='listItem'>
      <ExitToAppIcon/> 
      <h3>Sign Out</h3>
      </Link>
          </div>
          <div className="item">
      <Link to='/' className='listItem'>
      <HelpIcon /> 
      <h3>Help</h3>
      </Link>
          </div>

         </div>
     
         <div>

                  
     

      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
   </div>
   </>
  )
}

export default AdminMenu