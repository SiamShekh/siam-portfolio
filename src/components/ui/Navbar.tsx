import { NavLink, useLocation } from "react-router-dom";
import logo from "../../assets/icons/Logo.png";

const Navbar = () => {
    const isActive = useLocation().hash;

    return (
        <div className="fixed top-0 w-full  mx-auto">
            <div className="navbar bg-[#D9D9D91A] my-[2.5vh] max-w-[1200px] max-h-[15vh] px-3 lg:px-10 backdrop-blur-xl flex justify-between items-center rounded-3xl w-fit lg:w-full mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost bg-white lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to={'/#home'} className={` text-[20px] my-1 text-black w-fit font-poppins ${isActive === '#home' && 'liner_border_link_active'}`}>Home</NavLink>
                            <NavLink to={'/#about'} className={` text-[20px] my-1 text-black w-fit  font-poppins ${isActive === '#about' && 'liner_border_link_active'}`}>About</NavLink>
                            <NavLink to={'/#services'} className={` text-[20px] my-1 text-black w-fit  font-poppins ${isActive === '#services' && 'liner_border_link_active'}`}>Services</NavLink>
                            <NavLink to={'/#portfolio'} className={` text-[20px] my-1 text-black w-fit  font-poppins ${isActive === '#portfolio' && 'liner_border_link_active'}`}>Portfolio</NavLink>
                        </ul>
                    </div>
                    <img src={logo} height={'70px'} width={'70px'} alt="logo images" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex justify-center items-center gap-7">
                        <NavLink to={'/#home'} className={` text-[20px] font-poppins ${isActive === '#home' && 'liner_border_link_active'}`}>Home</NavLink>
                        <NavLink to={'/#about'} className={` text-[20px] font-poppins ${isActive === '#about' && 'liner_border_link_active'}`}>About</NavLink>
                        <NavLink to={'/#services'} className={` text-[20px] font-poppins ${isActive === '#services' && 'liner_border_link_active'}`}>Services</NavLink>
                        <NavLink to={'/#portfolio'} className={` text-[20px] font-poppins ${isActive === '#portfolio' && 'liner_border_link_active'}`}>Portfolio</NavLink>
                    </ul>
                </div>
                <div className="navbar-end ml-10 lg:ml-0">
                    <NavLink to={'https://t.me/Siam_shekh_n'} className={'text-23px text-black rounded-2xl shadow-custom font-bold px-[20px] font-poppins py-[16px] bg-white'}>Let’s Talk</NavLink>
                </div>
            </div>
        </div>

    );
};

export default Navbar;