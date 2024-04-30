'use client'
import { useRouter } from "next/navigation";

const UpdateProductPage = ({ params }: { params: { productId: string } }) => {
    const router = useRouter();

    const handleUpdate = () => {
        alert("Product updated successfully.");
        router.push(`/product/${params.productId}`);
    };

    return (
        <div className="update-container">
            <h1>Update Product</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" id="name" value={""} /></td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td><textarea id="description"></textarea></td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td><input type="number" id="price" value={""} /></td>
                    </tr>
                    <tr>
                        <td>Quantity:</td>
                        <td><input type="number" id="quantity" value={""} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}>
                            <button type="button" onClick={handleUpdate}>Update Product</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default UpdateProductPage;
