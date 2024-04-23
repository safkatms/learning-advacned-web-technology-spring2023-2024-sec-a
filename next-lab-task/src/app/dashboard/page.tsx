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
            <Link href="/employee/register">Add Employee</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2>Employee List</h2>
        <table>
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Company Name</th>
              <th>Contact No</th>
              <th>Username</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>ABC Inc.</td>
              <td>1234567890</td>
              <td>john.doe</td>
              <td><Link href={'/employee/[employeeid]?'}>View</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashboardPage;
