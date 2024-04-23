"use client"
import { useRouter } from "next/navigation";

const EmployeeDeletePage = () => {
    const router= useRouter()

    const handleDeletion = () => {
        alert('Employee deletion complete.');
        router.push('/dashboard');
      };

  const handleCancel = () => {
    alert('Deletion canceled.');
    router.back();
  };

  return (
    <div>
      <h1>Delete Employee</h1>
      <p>Are you sure you want to delete this employee?</p>
      <button type="button" onClick={handleDeletion}>Delete</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default EmployeeDeletePage;
