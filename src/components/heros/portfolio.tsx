import { Link } from "react-router-dom";
import Features_item from "../utils/features_item";

const Portfolio = () => {
    return (
        <div className="min-h-screen max-w-[1300px] flex justify-center flex-col mx-auto px-5 lg:px-0">
            <h1 className="lg:text-5xl md:text-5xl text-3xl liner_border_link_active w-fit my-5 text-white">Worked Sides</h1>

            <div className="carousel bg-[#1D142B] rounded-xl w-full mx-auto h-[75vh] ">
                <div id="item5" className="carousel-item w-full my-5 h-full">
                    <div className="flex justify-between flex-col lg:flex-row px-5 h-full w-full gap-5">
                        <div className="flex-1 w-full h-full">
                            <img
                                src="https://i.ibb.co/dcQTW9d/Portfolio-Planq.png"
                                className="lg:h-[92%] md:h-80 h-40 rounded-xl" />
                        </div>
                        <div className="flex-1">
                            <p className="capitalize text-white text-xl lg:text-3xl font-roboto">| assistant marketing manager </p>
                            <p className="text-white opacity-70 text-xl mt-5 lg:leading-10 font-poppins lg:tracking-wider line-clamp-[11]">
                                {"I have worked with Planq Network for more than a year, collaborating closely with their head of marketing and core team. Planq Network is a self-funded project with its own blockchain, aiming to revolutionize decentralized finance. My role involved helping them scale their business by implementing their innovative ideas and visualizing their concepts. Through strategic marketing efforts and a deep understanding of blockchain technology, I contributed to the growth and success of Planq Network, ensuring their vision was effectively communicated and realized in the market."}
                            </p>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full my-5 h-full">
                    <div className="flex justify-between flex-col lg:flex-row px-5 h-full w-full gap-5">
                        <div className="flex-1 w-full h-full">
                            <img
                                src="https://i.ibb.co/P4F83jk/Portfolio-Guild-Fi.png"
                                className="lg:h-[92%] md:h-80 h-40 rounded-xl" />
                        </div>
                        <div className="flex-1">
                            <p className="capitalize text-white text-xl lg:text-3xl font-roboto">| head Community manager </p>
                            <p className="text-white opacity-70 text-xl mt-5 lg:leading-10 font-poppins lg:tracking-wider line-clamp-[11]">
                                {"I have worked on GuildFi as the Bangladesh community manager, where I significantly grew the Bangladeshi fanbase of the project. GuildFi is a comprehensive ecosystem that connects games, NFTs, and communities to maximize player benefits and enable interoperability across the metaverse. My role involved managing the entire community in Bangladesh, and I was given full responsibility to handle all aspects single-handedly. Through strategic engagement and community-building efforts, I successfully expanded GuildFi's presence and popularity in the region, driving remarkable growth in the local fanbase."}
                            </p>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full my-5 h-full">
                    <div className="flex justify-between flex-col lg:flex-row px-5 h-full w-full gap-5">
                        <div className="flex-1 w-full h-full">
                            <img
                                src="https://i.ibb.co/rMCDchF/Portfolio-Elpis.png"
                                className="lg:h-[92%] md:h-80 h-40 rounded-xl" />
                        </div>
                        <div className="flex-1">
                            <p className="capitalize text-white text-xl lg:text-3xl font-roboto">| head Community manager </p>
                            <p className="text-white opacity-70 text-xl mt-5 lg:leading-10 font-poppins lg:tracking-wider line-clamp-[11]">
                                {"I have worked on Elpis Battle for several months and have made substantial contributions to community growth. Elpis Battle is a turn-based RPG game built on the Binance Smart Chain. It offers an immersive experience where players can collect, train, and battle with various heroes. My efforts have focused on engaging the community, fostering a welcoming environment for new players, and enhancing overall player satisfaction. By leveraging my skills in community management and growth strategies, I have helped to increase active user participation and build a loyal player base for Elpis Battle."}
                            </p>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full my-5 h-full">
                    <div className="flex justify-between flex-col lg:flex-row px-5 h-full w-full gap-5">
                        <div className="flex-1 w-full h-full">
                            <img
                                src="https://i.ibb.co/3SWNbpf/Portfolio-Horizonlands.png"
                                className="lg:h-[92%] md:h-80 h-40 rounded-xl" />
                        </div>
                        <div className="flex-1">
                            <p className="capitalize text-white text-xl lg:text-3xl font-roboto">| head Community manager </p>
                            <p className="text-white opacity-70 text-xl mt-5 lg:leading-10 font-poppins lg:tracking-wider line-clamp-[11]">
                                {"I've worked on Horizonland for more than half a year, contributing significantly to their local community. Horizonland is a Play-to-Earn (P2E) project where players can immerse themselves in a metaverse, experiencing various gaming genres and earning rewards. My contributions have focused on building up the local area growth, engaging the community, and attracting many new users to the game. By leveraging my expertise in community management and growth strategies, I have helped Horizonland see a significant increase in active players, enhancing both the game's popularity and the user experience."}
                            </p>
                        </div>
                    </div>
                </div>
                <div id="item1" className="carousel-item w-full my-5 h-full">
                    <div className="flex justify-between flex-col lg:flex-row px-5 h-full w-full gap-5">
                        <div className="flex-1 w-full h-full">
                            <img
                                src="https://i.ibb.co/GCzZXG4/Portfolio-Raiinmakers.png"
                                className="lg:h-[92%] md:h-80 h-40 rounded-xl" />
                        </div>
                        <div className="flex-1">
                            <p className="capitalize text-white text-xl lg:text-3xl font-roboto">| Full-stack engineer </p>
                            <p className="text-white opacity-70 text-xl mt-5 lg:leading-10 font-poppins lg:tracking-wider line-clamp-[11]">
                                {"I have worked on Raiinmaker as a full-stack developer, where I was responsible for maintaining the application and ensuring its smooth operation. Raiinmaker is a platform that connects brands with communities to create and share content, leveraging blockchain technology to reward users. The app includes impressive features such as a validator and AI image generation, which enhance user experience and engagement. In the future, I plan to add more innovative features to further improve the platform and meet the evolving needs of its users."}
                            </p>
                        </div>
                    </div>
                </div>
                <div id="project_item1" className="carousel-item w-full my-5 h-full">
                    <div className="flex justify-between flex-col lg:flex-row px-5 h-full w-full gap-5">
                        <div className="flex-1 w-full h-full">
                            <img
                                src="https://i.ibb.co/x6C1jyy/Portfolio-Quran-Kareem.png"
                                className="lg:h-[92%] md:h-80 h-40 rounded-xl" />
                        </div>
                        <div className="flex-1">
                            <p className="capitalize text-white text-xl lg:text-3xl font-roboto">QuraanKareem </p>
                            <p className="capitalize text-white text-xs lg:text-xl font-roboto">features:</p>
                            <div className="">
                                <Features_item title="Prayer time" />
                                <Features_item title="Surah with translation" />
                                <Features_item title="Hadeeth with local language" />
                                <Features_item title="Allah 99 names" />
                                <Features_item title="Tasbih" />
                                <Features_item title="Qibla Compass" />
                                <Features_item title="Siyam Timing" />
                                <Features_item title="Dua For Everyday" />
                                <Features_item title="Bookmarks" />
                            </div>
                            <div className="flex justify-around items-center flex-col gap-5 lg:flex-row mt-5 w-full">
                                <Link to={'https://play.google.com/store/apps/details?id=com.JannatiSobdo.nur_e_quran'} replace className="bg-[#201433] text-white px-7 text-xl py-2 rounded-lg w-fit liner_border_link_active">Project</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="project_item2" className="carousel-item w-full my-5 h-full">
                    <div className="flex justify-between flex-col lg:flex-row px-5 h-full w-full gap-5">
                        <div className="flex-1 w-full h-full">
                            <img
                                src="https://i.ibb.co/Ws4N852/Portfolio-AAVAULT.png"
                                className="lg:h-[92%] md:h-80 h-40 rounded-xl" />
                        </div>
                        <div className="flex-1">
                            <p className="capitalize text-white text-xl lg:text-3xl font-roboto">Aavault </p>
                            <p className="capitalize text-white text-xs lg:text-xl font-roboto">features:</p>
                            <div className="">
                                <Features_item title="Introduction" />
                                <Features_item title="About us" />
                                <Features_item title="Tokenamics" />
                                <Features_item title="Benefits" />
                                <Features_item title="Roadmaps" />
                                
                            </div>
                            <div className="flex justify-around items-center flex-col gap-5 lg:flex-row mt-5 w-full">
                                <Link to={'https://aa-vault.vercel.app/#intro'} replace className="bg-[#201433] text-white px-7 text-xl py-2 rounded-lg w-fit liner_border_link_active">Project</Link>
                                <Link to={'https://github.com/SiamShekh/aa-vault-react-js.git'} replace className="bg-[#201433] text-white px-7 text-xl py-2 rounded-lg w-fit liner_border_link_active">Source Code</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
                <a href="#item5" className="btn btn-xs">5</a>
                <a href="#project_item1" className="btn btn-xs">6</a>
                <a href="#project_item2" className="btn btn-xs">7</a>
            </div>
        </div>
    );
};

export default Portfolio;