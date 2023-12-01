import { useState } from "react";
import Link from "../Link/Link";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";



const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { path: '/', name: 'Home', id: 'home' },
        { path: '/about', name: 'About', id: 'about' },
        { path: '/contact', name: 'Contact', id: 'contact' },
        { path: '/products', name: 'Products', id: 'products' },
        { path: '/dashboard', name: 'Dashboard', id: 'dashboard' },
      ];
      

    return (
        <nav>
            <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ? <IoClose /> : <IoMdMenu />
                }
            </button>
            <ul className={`md:flex items-center absolute md:static py-2 bg-slate-900  duration-500
            ${open ? 'top-6 left-0 w-1/2' : '-left-full'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;