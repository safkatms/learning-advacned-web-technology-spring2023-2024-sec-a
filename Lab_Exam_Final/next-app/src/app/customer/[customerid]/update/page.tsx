"use client";
import { useRouter } from "next/navigation";

const UpdateCustomerPage = ({ params }: { params: { customerId: string } }) => {
  const router = useRouter();

  const handleUpdate = () => {
    alert("Customer updated successfully.");
    router.push(`/customer/${params.customerId}`);
  };

  return (
    <div className="update-container">
      <h1>Update Customer</h1>
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
              <button type="button" onClick={handleUpdate}>
                Update Customer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpdateCustomerPage;
