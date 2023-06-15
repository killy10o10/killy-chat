import Add from '../assets/images/addAvatar.png'
import Login from './Login'

function Register() {
  return(
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Killy Chat</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="user name"/>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <label>
            <img src={Add} alt="Add Image" />
            <span>Add an Avatar</span>
            <input type="file"  />
          </label>
          <button>Sign up</button>
        </form>
        <p>Already have an account?  </p>
      </div>
    </div>
  )
}

export default Register