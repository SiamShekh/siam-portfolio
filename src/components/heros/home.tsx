import Marquee from "react-fast-marquee";
import img from "../../assets/images/siam_portfulio_images.webp";
import portfolio from "../../assets/pdf/Siam-(Frontend Developer).pdf";
const Home = () => {
    return (
        <div className="max-w-[1300px] mx-auto lg:h-[80vh] overflow-hidden p-5 lg:px-0">
            <div className="flex justify-between items-center flex-col-reverse md:flex-row lg:flex-row lg:h-[70vh] gap-5 lg:gap-0">
                <div className="flex-1">
                    <h1 className="text-white lg:text-[60px] text-4xl font-roboto">I'm <strong>Siam Sheikh</strong></h1>
                    <p className="text-white font-roboto text-[20px] my-5">Seasoned professional <span className="bg-gradient-to-r from-[#0055ffec] via-[#B275FF61] to-[#FF00F576] text-transparent bg-clip-text">#web3 marketing</span> & <span className="bg-gradient-to-r from-[#0055ffec] via-[#B275FF61] to-[#FF00F576] text-transparent bg-clip-text">full-stack developer</span> optimization pro. ⚡️</p>
                    <a href={portfolio} download={'siam-portfolio'} className="bg-white text-black px-5 py-3 border-b-4 border-blue-500 font-semibold rounded-xl font-roboto ">Download CV</a>
                </div>
                <div className="flex-1 flex justify-center items-center">
                    <div>
                        <img src={img} draggable={false} alt="images" className="lg:w-4/5 bg-[#1F162C] p-2 rounded-2xl" />
                    </div>
                </div>
            </div>

            <Marquee
                play
                direction="right"
                speed={50}
                gradient
                gradientColor="#0A0019"
                gradientWidth={100}
                className="lg:mt-5 my-10 lg:my-0 h-[5vh] bg-gradient-to-r from-transparent to-transparent via-[#1F162C] bg-transparent"
            >
                <p className="text-xl font-poppins text-white mx-10">AI</p>
                <p className="text-xl font-poppins text-white mx-10">WEB3</p>
                <p className="text-xl font-poppins text-white mx-10">SOCIAL</p>
                <p className="text-xl font-poppins text-white mx-10">MARKETING</p>
                <p className="text-xl font-poppins text-white mx-10">FULL-STACK</p>
                <p className="text-xl font-poppins text-white mx-10">DEVELOPER</p>
                <p className="text-xl font-poppins text-white mx-10">FRONT-END</p>
                <p className="text-xl font-poppins text-white mx-10">BACK-END</p>
                <p className="text-xl font-poppins text-white mx-10">ANDROID DEVELOPER</p>
                <p className="text-xl font-poppins text-white mx-10">TYPESCRIPT</p>
                <p className="text-xl font-poppins text-white mx-10">JAVASCRIPT</p>
                <p className="text-xl font-poppins text-white mx-10">EXPRESS JS</p>
                <p className="text-xl font-poppins text-white mx-10">JAVA</p>
            </Marquee>
        </div>
    );
};

export default Home;