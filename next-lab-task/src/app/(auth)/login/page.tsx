'use client'

import {useRouter } from "next/navigation"

const LoginPage = () => {
    const router = useRouter();

    const goToDashboard = () => {
        router.push('/dashboard');
      };

  const handleSignup = () => {
    router.push('/signup');
  };
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
            <td colSpan={2}>
              <button type="submit" onClick={goToDashboard}>Login</button><hr />
              <h5>Don't have an account?</h5>
              <button onClick={handleSignup}>Register</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default LoginPage;
  