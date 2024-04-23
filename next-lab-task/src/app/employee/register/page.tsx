'use client'
import { useRouter } from "next/navigation";

const EmployeeRegistrationPage = () => {
    const router= useRouter();

    const backDashboard =()=>{
        alert("Employee registed successful.")
        router.push("/dashboard");
    }

  return (
    <div className="registration-container">
      <h1>Registration</h1>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td><input type="text" id="name" /></td>
          </tr>
          <tr>
            <td>Company:</td>
            <td><input type="text" id="company" /></td>
          </tr>
          <tr>
            <td>Contact No:</td>
            <td><input type="text" id="contact" /></td>
          </tr>
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
              <button type="submit" onClick={backDashboard}>Add</button><hr />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeRegistrationPage;
