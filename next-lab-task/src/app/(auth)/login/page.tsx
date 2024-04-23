const LoginPage = () => {
    return (
      <div className="login-container">
        <h1>Login</h1>
        <table>
          <tbody>
            <tr>
              <td>Username:</td>
              <td><input type="text" id="username" /></td>
            </tr>
            <tr>
              <td>Password:</td>
              <td><input type="password" id="password" /></td>
            </tr>
            <tr>
              <td colSpan={2}><button type="submit">Login</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default LoginPage;
  