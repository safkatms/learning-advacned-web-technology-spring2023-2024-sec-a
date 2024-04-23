'use client'
import { useRouter } from "next/navigation";

const EmployeeViewPage = ({params}:{params:{employeeid:string}}) => {
    const router= useRouter();

    const goToUpdate =()=>{
      router.push("/employee/[employeeid]/update");
  }

    const goToDelete =()=>{
        router.push("/employee/[employeeid]/delete");
    }

  return (
    <div className="view-container">
      <h1>View Employee</h1>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td><input type="text" id="name" value={""} readOnly/></td>
          </tr>
          <tr>
            <td>Company:</td>
            <td><input type="text" id="company" value={""} readOnly/></td>
          </tr>
          <tr>
            <td>Contact No:</td>
            <td><input type="text" id="contact" value={""} readOnly/></td>
          </tr>
          <tr>
            <td>Username:</td>
            <td><input type="text" id="username" value={""} readOnly/></td>
          </tr>
          <tr>
            <td>Password:</td>
            <td><input type="password" id="password" value={""} readOnly/></td>
          </tr>
          <tr>
            <td>
              <button type="submit" onClick={goToUpdate}>Update</button>
            </td>
            <td>
              <button type="submit" onClick={goToDelete}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeViewPage;
