"use client"
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
                        <td><input type="text" id="name" value={""} /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="email" id="email" value={""} /></td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td><input type="tel" id="phone" value={""} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="button" onClick={handleUpdate}>Update Customer</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UpdateCustomerPage;
