'use client'
import { useRouter } from "next/navigation";

const ProductViewPage = ({ params }: { params: { productId: string } }) => {
    const router = useRouter();

    const goToUpdate = () => {
        router.push(`/product/${params.productId}/update`);
    };

    const goToDelete = () => {
        router.push(`/product/${params.productId}/delete`);
    };

    return (
        <div className="view-container">
            <h1>View Product</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Name:</td>
                        <td><input type="text" id="name" value={"Product Name"} readOnly /></td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td><textarea id="description" readOnly>{"Product Description"}</textarea></td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td><input type="text" id="price" value={"Product Price"} readOnly /></td>
                    </tr>
                    <tr>
                        <td>Quantity:</td>
                        <td><input type="text" id="quantity" value={"Product Quantity"} readOnly /></td>
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

export default ProductViewPage;
