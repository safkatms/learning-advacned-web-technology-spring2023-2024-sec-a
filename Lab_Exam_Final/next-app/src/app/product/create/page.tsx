'use client'
import { useRouter } from "next/navigation";

const CreateProductPage = () => {
    const router = useRouter();

    const createProduct = () => {
        alert("Product created successfully.");
        router.push("/dashboard");
    };

    return (
        <div className="registration-container">
            <h1>Create Product</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" id="name" /></td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td><textarea id="description"></textarea></td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td><input type="number" id="price" /></td>
                    </tr>
                    <tr>
                        <td>Quantity:</td>
                        <td><input type="number" id="quantity" /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="button" onClick={createProduct}>Create Product</button><hr />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CreateProductPage;
