"use client";
import { useRouter } from "next/navigation";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import axios from "axios";

const RegistrationPage = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/login");
  };

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleChangeName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangeUsername = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();
    setError("");

    if (!name || !username || !email || !password) {
      setError("All fields are required");
    }else{
      try {
        postData();
        setError("User created successfully");
      }catch (e : any) {
          setError(e);
        }
        setName("");
        setUsername("");
        setEmail("");
        setPassword("");
        setError("")
    }
  };

  async function postData() {
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('username', username);
      formData.append('email', email);
      formData.append('password', password);
      const response = await axios.post(process.env.NEXT_BACKEND_API_ENDPOINT + '/user/register/', formData, 
      {
       headers: {
         'Content-Type': 'multipart/form-data'
       }
      });
     
      const data = response.data;
      console.log(data);
      } catch (error) {
      console.error(error);
      }
  }

  return (
    <div className="registration-container">
      <h1>Registration</h1>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            <tr>
              <td>Name:</td>
              <td>
              <input type="text" name="name" value={name} onChange={handleChangeName} />
              </td>
            </tr>
            <tr>
              <td>Username:</td>
              <td>
              <input type="text" name="username" value={username} onChange={handleChangeUsername} />
              </td>
            </tr>
            <tr>
            <td>Email:</td>
              <td>
              <input type="email" name="email" value={email} onChange={handleChangeEmail} />
              </td>
            </tr>
            <tr>
              <td>Password:</td>
              <td>
              <input type="password" name="password" value={password} onChange={handleChangePassword} />
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <button type="submit">
                  Register
                </button>
                <hr />
                <h5>Already have an account?</h5>
                <button type="button" onClick={handleLogin}>
                  Login
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default RegistrationPage;
