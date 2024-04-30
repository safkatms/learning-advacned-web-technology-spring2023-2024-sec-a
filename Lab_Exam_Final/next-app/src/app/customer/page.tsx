import Link from 'next/link';

const CustomerManagementPage = () => {
    const customers = [
        { id: 1, name: 'Customer 1', email: 'customer1@example.com' },
        { id: 2, name: 'Customer 2', email: 'customer2@example.com' },
        { id: 3, name: 'Customer 3', email: 'customer3@example.com' },
    ];

    return (
        <div className="customer-management-container">
            <h1>Customer Management</h1>

            <h2>Actions</h2>
            <ul>
                <li>
                    <Link href="/customer/create">
                       Add Customer
                    </Link>
                </li>
            </ul>

            <h2>Customer List</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th> 
                    </tr>
                </thead>
                <tbody>
                    {customers.map(customer => (
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.email}</td>
                            <td>
                                <Link href={`/customer/${customer.id}`}>
                                    View
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CustomerManagementPage;
