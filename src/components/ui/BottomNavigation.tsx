import { Link } from "react-router-dom";
import logo from "../../assets/icons/Logo.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

const BottomNavigation = () => {
    return (
        <div className="bg-[#000A1C] min-h-20 px-5 lg:px-0">
            <div className="max-w-[1300px] mx-auto py-10 flex justify-between items-center flex-col md:flex-row mt-5">
                <div className="flex-1">
                    <div className="flex gap-5 items-center">
                        <img src={logo} alt="logo" className="size-12" />
                        <p className="text-2xl text-white font-roboto">Siam Sheikh</p>
                    </div>
                    <p className="text-white opacity-70 lg:text-xl text-xs tracking-wider mt-5 font-poppins">
                        I'm glad you explored my website. I have shared only genuine information and actual experiences that I have gained in the last 4.5 years. Thank you for learning more about me. If you would like to hire me or discuss with me about your company's project or social community, please click any of the buttons and contact me. I'm always available for you.
                    </p>
                </div>
                <div className="flex-1 mt-5 lg:mt-0">
                    <div className="flex gap-5 justify-end ">
                        <Link to={'/#home'} className="lg:text-xl font-roboto text-white">Home</Link>
                        <Link to={'/#about'} className="lg:text-xl font-roboto text-white">About</Link>
                        <Link to={'/#services'} className="lg:text-xl font-roboto text-white">Services</Link>
                        <Link to={'/#portfolio'} className="lg:text-xl font-roboto text-white">Portfolio</Link>
                    </div>

                    <div className="flex gap-5 justify-end mt-5">
                        <div className="bg-gradient-to-r from-[#FF5C00] via-[#AE2791] to-[#7000FF] rounded-full p-[2px] relative">
                            <div className="rounded-full bg-black">
                                <div className="scale-[0.7]">
                                    <Link to={'https://t.me/Siam_shekh_n'} className="text-4xl font-roboto text-[#AE2791] "><FaTelegramPlane /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#FF5C00] via-[#AE2791] to-[#7000FF] rounded-full p-[2px] relative">
                            <div className="rounded-full bg-black">
                                <div className="scale-[0.7]">
                                    <Link to={'https://x.com/siiiiam_dev'} className="text-4xl font-roboto text-[#AE2791] "><FaXTwitter /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gradient-to-r from-[#FF5C00] via-[#AE2791] to-[#7000FF] rounded-full p-[2px] relative">
                            <div className="rounded-full bg-black">
                                <div className="scale-[0.7]">
                                    <Link to={'https://www.linkedin.com/in/siamshekh/'} className="text-4xl font-roboto text-[#AE2791] "><FaLinkedinIn /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-r from-[#FF5C00] via-[#AE2791] to-[#7000FF] rounded-full p-[2px] relative">
                            <div className="rounded-full bg-black">
                                <div className="scale-[0.7]">
                                    <Link to={'https://github.com/siamshekh'} className="text-4xl font-roboto text-[#AE2791] "><FaGithub /></Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BottomNavigation;