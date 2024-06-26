"use client"
import { useRouter } from "next/navigation";

const ProductDeletePage = () => {
    const router = useRouter();

    const handleDeletion = () => {
        // Add your logic to delete the product
        alert('Product deletion complete.');
        router.push('/dashboard');
    };

    const handleCancel = () => {
        alert('Deletion canceled.');
        router.back();
    };

    return (
        <div>
            <h1>Delete Product</h1>
            <p>Are you sure you want to delete this product?</p>
            <button type="button" onClick={handleDeletion}>Delete</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default ProductDeletePage;