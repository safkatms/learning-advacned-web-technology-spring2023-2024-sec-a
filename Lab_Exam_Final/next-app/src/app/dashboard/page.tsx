import Link from "next/link";

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      <div>
        <h1>Dashboard</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link href="/product">Product</Link>
          </li>
          <li>
          <Link href="#">Customer</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardPage;
