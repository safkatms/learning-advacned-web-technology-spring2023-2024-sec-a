"use client";
import { useRouter } from "next/navigation";

const CreateCustomerPage = () => {
  const router = useRouter();

  const createCustomer = () => {
    alert("Product created successfully.");
    router.push("/dashboard");
  };

  return (
    <div className="registration-container">
      <h1>Create Customer</h1>
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input type="text" id="name" />
            </td>
          </tr>
          <tr>
            <td>Username:</td>
            <td>
              <input type="text" id="username" />
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input type="email" id="company" />
            </td>
          </tr>
          <tr>
            <td>Password:</td>
            <td>
              <input type="password" id="password" />
            </td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button type="button" onClick={createCustomer}>
                Create Customer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default CreateCustomerPage;
