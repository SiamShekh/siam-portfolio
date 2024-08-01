
const Portfolio = () => {
    return (
        <div className="min-h-screen max-w-[1300px] flex justify-center flex-col mx-auto px-5 lg:px-0">
            <h1 className="lg:text-5xl md:text-5xl text-3xl liner_border_link_active w-fit my-5 text-white">Worked Sides</h1>

            <div className="carousel bg-[#1D142B] rounded-xl w-full mx-auto h-[75vh] lg:shadow-custom">
                <div id="item1" className="carousel-item w-full my-5 h-full">
                    <div className="flex justify-between flex-col lg:flex-row px-5 h-full w-full gap-5">
                        <div className="flex-1 w-full h-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                className="lg:h-[92%] md:h-80 h-40 rounded-xl" />
                        </div>
                        <div className="flex-1">
                            <p className="capitalize text-white text-xl lg:text-3xl font-roboto">| head Community manager </p>
                            <p className="text-white opacity-70 text-xl mt-5 lg:leading-10 font-poppins lg:tracking-wider line-clamp-[11]">
                                {"Raiinmaker is an app that enables everyone to become an influencer and earn real cryptocurrency by creating AI-generated content and sharing it on social media. I have been working with Raiinmaker as the Head of Community Management and Social Media Growth for almost two years. During my tenure, I have successfully managed social marketing campaigns and brought in more than 40k new users to the community, thereby contributing to the project’s economy. I am proud to have been a part of Raiinmaker’s success story and look forward to continuing to drive growth and engagement in the future."}
                            </p>
                        </div>
                    </div>
                </div>
                <div id="item2" className="carousel-item w-full my-5 h-full">
                    <div className="flex justify-between flex-col lg:flex-row px-5 h-full w-full gap-5">
                        <div className="flex-1 w-full h-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                className="lg:h-[92%] md:h-80 h-40 rounded-xl" />
                        </div>
                        <div className="flex-1">
                            <p className="capitalize text-white text-xl lg:text-3xl font-roboto">| head Community manager </p>
                            <p className="text-white opacity-70 text-xl mt-5 lg:leading-10 font-poppins lg:tracking-wider line-clamp-[11]">
                                {"Raiinmaker is an app that enables everyone to become an influencer and earn real cryptocurrency by creating AI-generated content and sharing it on social media. I have been working with Raiinmaker as the Head of Community Management and Social Media Growth for almost two years. During my tenure, I have successfully managed social marketing campaigns and brought in more than 40k new users to the community, thereby contributing to the project’s economy. I am proud to have been a part of Raiinmaker’s success story and look forward to continuing to drive growth and engagement in the future."}
                            </p>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item w-full my-5 h-full">
                    <div className="flex justify-between flex-col lg:flex-row px-5 h-full w-full gap-5">
                        <div className="flex-1 w-full h-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                className="lg:h-[92%] md:h-80 h-40 rounded-xl" />
                        </div>
                        <div className="flex-1">
                            <p className="capitalize text-white text-xl lg:text-3xl font-roboto">| head Community manager </p>
                            <p className="text-white opacity-70 text-xl mt-5 lg:leading-10 font-poppins lg:tracking-wider line-clamp-[11]">
                                {"Raiinmaker is an app that enables everyone to become an influencer and earn real cryptocurrency by creating AI-generated content and sharing it on social media. I have been working with Raiinmaker as the Head of Community Management and Social Media Growth for almost two years. During my tenure, I have successfully managed social marketing campaigns and brought in more than 40k new users to the community, thereby contributing to the project’s economy. I am proud to have been a part of Raiinmaker’s success story and look forward to continuing to drive growth and engagement in the future."}
                            </p>
                        </div>
                    </div>
                </div>
                <div id="item4" className="carousel-item w-full my-5 h-full">
                    <div className="flex justify-between flex-col lg:flex-row px-5 h-full w-full gap-5">
                        <div className="flex-1 w-full h-full">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                                className="lg:h-[92%] md:h-80 h-40 rounded-xl" />
                        </div>
                        <div className="flex-1">
                            <p className="capitalize text-white text-xl lg:text-3xl font-roboto">| head Community manager </p>
                            <p className="text-white opacity-70 text-xl mt-5 lg:leading-10 font-poppins lg:tracking-wider line-clamp-[11]">
                                {"Raiinmaker is an app that enables everyone to become an influencer and earn real cryptocurrency by creating AI-generated content and sharing it on social media. I have been working with Raiinmaker as the Head of Community Management and Social Media Growth for almost two years. During my tenure, I have successfully managed social marketing campaigns and brought in more than 40k new users to the community, thereby contributing to the project’s economy. I am proud to have been a part of Raiinmaker’s success story and look forward to continuing to drive growth and engagement in the future."}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Portfolio;