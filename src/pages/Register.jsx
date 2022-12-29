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
          <input type="file" />
          <button>sign Up</button>
        </form>
        <p>Already have an account? <a href="#">Login</a> </p>
      </div>
    </div>
  )
}

export default Register