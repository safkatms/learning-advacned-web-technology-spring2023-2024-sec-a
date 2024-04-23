"use client";
import { useRouter } from "next/navigation";

const EmployeeUpdatePage = () => {
  const router = useRouter();

  const handleUpdate = () => {
    alert("Employee update complete.");
    router.push("/dashboard");
  };

  const handleCancel = () => {
    alert("Update canceled.");
    router.back();
  };

  return (
    <div>
      <h1>Update Employee Details</h1>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" id="name" value={""}  />
            </td>
          </tr>
          <tr>
            <td>Company:</td>
            <td>
              <input type="text" id="company" value={""}  />
            </td>
          </tr>
          <tr>
            <td>Contact No:</td>
            <td>
              <input type="text" id="contact" value={""}  />
            </td>
          </tr>
          <tr>
            <td>Username:</td>
            <td>
              <input type="text" id="username" value={""} readOnly />
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input type="password" id="password" value={""}  />
            </td>
          </tr>
        </tbody>
      </table>
      <button type="button" onClick={handleUpdate}>
        Update
      </button>
      <button type="button" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
};

export default EmployeeUpdatePage;
