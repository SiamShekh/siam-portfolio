import { Link } from "react-router-dom";
import img from "../../assets/images/siam_portfulio_images.webp";
const About = () => {
    return (
        <div className="mx-auto min-h-screen max-w-[1300px] lg:h-screen px-5 lg:px-0">
            <div className="flex items-center justify-between flex-col-reverse lg:flex-row gap-5 h-full">
                <div className="flex-[2] ">
                    <div>
                        <img src={img} draggable={false} alt="images" className="w-full  bg-[#1F162C] p-2 rounded-2xl" />
                    </div>
                </div>
                <div className="flex-[4] ">
                    <div className="w-fit h-fit">
                        <p className="font-roboto text-4xl text-white">About Me</p>
                        <div className="h-1 w-full mt-1 bg-gradient-to-r from-[#4200FF] to-[#FF6B00]" />
                    </div>
                    <p className="text-white lg:text-xl font-roboto my-5">
                        Hello, I am an experienced Full-stack developer and Marketing Premier with four years of experience in project development and marketing. I've worked on over 30 blockchain projects as both part-time and full-time roles, and have a proven track record of success.
                    </p>
                    <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 flex-col">
                        <div className="flex-1">
                            <p className="text-5xl font-poppins bg-gradient-to-tl from-[#FF5C00] via-[#AE2791] to-[#7000FF] text-transparent bg-clip-text font-bold">30+</p>
                            <p className="text-white">Total project work experience.</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-5xl font-poppins bg-gradient-to-tl from-[#FF5C00] via-[#AE2791] to-[#7000FF] text-transparent bg-clip-text font-bold">2+</p>
                            <p className="text-white">Full-stack work experience</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-5xl font-poppins bg-gradient-to-tl from-[#FF5C00] via-[#AE2791] to-[#7000FF] text-transparent bg-clip-text font-bold">4+</p>
                            <p className="text-white">Front-end work experience</p>
                        </div>
                        <div className="flex-1">
                            <p className="text-5xl font-poppins bg-gradient-to-tl from-[#FF5C00] via-[#AE2791] to-[#7000FF] text-transparent bg-clip-text font-bold">6+</p>
                            <p className="text-white">Social media management work experience</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-10 flex-col lg:flex-row md:flex-row mt-5">
                        <Link to={'https://t.me/Siam_shekh_n'} className="bg-[#1D142B] text-white px-7 text-xl py-2 rounded-lg w-fit liner_border_link_active">Hire me</Link>
                        <Link to={'/#portfolio'} className="bg-[#1D142B] text-white px-7 text-xl py-2 rounded-lg w-fit liner_border_link_active">Portfolio</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;