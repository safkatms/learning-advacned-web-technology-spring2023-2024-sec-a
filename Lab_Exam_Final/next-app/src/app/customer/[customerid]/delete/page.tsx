"use client"
import { useRouter } from "next/navigation";

const CustomerDeletePage = () => {
    const router = useRouter();

    const handleDeletion = () => {
        alert('Customer deletion complete.');
        router.push('/dashboard');
    };

    const handleCancel = () => {
        alert('Deletion canceled.');
        router.back();
    };

    return (
        <div>
            <h1>Delete Customer</h1>
            <p>Are you sure you want to delete this customer?</p>
            <button type="button" onClick={handleDeletion}>Delete</button>
            <button type="button" onClick={handleCancel}>Cancel</button>
        </div>
    );
};

export default CustomerDeletePage;
