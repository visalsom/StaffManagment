import Link from "next/link"

const Navbar = () => {
    return (
        <div>
            <div>Staff Management</div>
        <div>
            <Link href="/">HomePage</Link>
            <Link href="/staff">Staff</Link>
        </div>
        </div>
        
    )
}

export default Navbar;