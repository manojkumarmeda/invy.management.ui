import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <div>
            <ul className='flex m-10 gap-10'>
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/about">
                    <li>About</li>
                </Link>
                <Link href="/careers">
                    <li>Careers</li>
                </Link>
                <Link href="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </div>
    )
}

export default Navbar