function Login() {
  return(
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Killy Chat</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign in</button>
        </form>
        <p>Don't have an account? <a href="#">Register</a> </p>
      </div>
    </div>
  )
}

export default Login