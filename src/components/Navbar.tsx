import Link from "next/link";



const Navbar = () => <>
    <nav>
        <ul>
            <li>
                <Link href="/">map</Link>
            </li>
            <li>
                <Link href="/data">data</Link>
            </li>
            <li>
                <Link href="/updatedata">upload</Link>
            </li>
        </ul>
    </nav>
</>

export default Navbar;