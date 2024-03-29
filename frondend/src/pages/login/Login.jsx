
import './login.scss';





const Login = () => {
  return (
  <div className="login_container">
    <div className='login'>
    <div className='imgsec'>
        <img src="https://images.careerindia.com/img/2017/02/tuition-15-1487138519.jpg" alt="" />
    </div>
    <div className='form_section'>
<h2>Login Now</h2>
    <form>
        <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
        <button type="submit">Login</button>
        <button type="submit">Register New Student</button>
        </div>
  
    </form>
    </div>
    </div>
   
  </div>
  )
}

export default Login