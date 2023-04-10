import React from 'react';

const Service = () => {
    return (
        <section id="service">
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className="text-black font-[800] text-[2.4rem] mb-5">Milestones</h2>
                    <p className="lg:max-w-[600px] lg:mx-auto font-[500] text-[16px] leading-7">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia alias, modi cupiditate
                        delectus aliquid atque reprehenderit sit. Animi dignissimos modi unde libero assumenda adipisci
                        et tempora. Eligendi modi pariatur ea!
                    </p>
                </div>
                <div className="flex flex-col justify-center sm:py-0 mt-[70px]">
                    <div className="w-full py-3 px-2 sm:mx-auto sm:px-0 ">
                        <div className="relative text-gray-500 antialiased text-sm  font-semibold">
                            {/* =======Line the middle========= */}
                            <div className="hidden absolute w-1 sm:block bg-black h-full left-1/2 transform translate-x-1/2"></div>
                            {/* =======Left card=============== */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center  flex-col sm:flex-row">
                                    <div className="flex justify-start w-[600px] h-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div
                                                data-aos="fade-right"
                                                data-aos-duration="1200"
                                                className="bg-white p-4 rounded shadow group hover:bg-gray-500 cursor-pointer ease-in duration-150"
                                            >
                                                <h3 className="text-black font-[700] mb-3 group-hover:text-white  text-[20px]">
                                                    Quynh Tho high school
                                                </h3>
                                                <p className="text-[15px] group-hover:text-white group-hover:font-[500]">
                                                    Studying process from 2015-2018
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* =======Right card=============== */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center  flex-col sm:flex-row">
                                    <div className="flex justify-end w-[600px] mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div
                                                data-aos="fade-left"
                                                data-aos-duration="1200"
                                                className="bg-white p-4 rounded shadow group hover:bg-gray-500 cursor-pointer ease-in duration-150"
                                            >
                                                <h3 className="text-black font-[700] mb-3 group-hover:text-white  text-[20px]">
                                                    Hanoi University of Mining and Geology
                                                </h3>
                                                <p className="text-[15px] group-hover:text-white group-hover:font-[500]">
                                                    Faculty of Information Technology
                                                    <br />
                                                    Learned technology : HTML,CSS,Javascript,React
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* =======Left card=============== */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center  flex-col sm:flex-row">
                                    <div className="flex justify-start w-[600px] h-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div
                                                data-aos="fade-right"
                                                data-aos-duration="1200"
                                                className="bg-white p-4 rounded shadow group hover:bg-gray-500 cursor-pointer ease-in duration-150"
                                            >
                                                <h3 className="text-black font-[700] mb-3 group-hover:text-white  text-[20px]">
                                                    Stay home
                                                </h3>
                                                <p className="text-[15px] group-hover:text-white group-hover:font-[500]">
                                                    Learn some new technology
                                                    <br />
                                                    And complete big project
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* =======Right card=============== */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center  flex-col sm:flex-row">
                                    <div className="flex justify-end w-[500px] mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div
                                                data-aos="fade-left"
                                                data-aos-duration="1200"
                                                className="bg-white p-4 rounded shadow group hover:bg-gray-500 cursor-pointer ease-in duration-150"
                                            >
                                                <h3 className="text-black font-[700] mb-3 group-hover:text-white  text-[20px]">
                                                    Intern Frontend Development
                                                </h3>
                                                <p className="text-[15px] group-hover:text-white group-hover:font-[500]">
                                                    I want to apply for an internship to learn more experience
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Service;
