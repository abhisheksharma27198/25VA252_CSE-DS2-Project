function Login() {

  return (

    <div className="login-box">

      <h1>Login</h1>

      <input
        type="email"
        placeholder="Enter Email"
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
      />

      <br /><br />

      <button className="btn">
        Login
      </button>

    </div>

  );
}

export default Login;
