import Link from "next/link";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="auth-options">
        <Link href="/login">Login</Link>||
        <Link href="/signup">Register</Link>
      </div>
    </nav>
  );
};

export default NavBar;
