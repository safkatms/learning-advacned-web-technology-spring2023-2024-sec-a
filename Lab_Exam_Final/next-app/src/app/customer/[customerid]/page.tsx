"use client"
import { useRouter } from "next/navigation";

const CustomerViewPage = ({ params }: { params: { customerId: string } }) => {
    const router = useRouter();

    const goToUpdate = () => {
        router.push(`/customer/${params.customerId}/update`);
    };

    const goToDelete = () => {
        router.push(`/customer/${params.customerId}/delete`);
    };

    return (
        <div className="view-container">
            <h1>View Customer</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" id="name" value={"Customer Name"} readOnly /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="email" id="email" value={"Customer Email"} readOnly /></td>
                    </tr>
                    <tr>
                        <td>Phone:</td>
                        <td><input type="tel" id="phone" value={"Customer Phone"} readOnly /></td>
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

export default CustomerViewPage;