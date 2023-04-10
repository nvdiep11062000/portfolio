import React from 'react';
import avataImg from '../../assets/j-7_20220610154506.jpg';
const Hero = () => {
    return (
        <>
            <section className="pt-0 mt-8" id="about">
                <div className="container pt-4">
                    <div className="md:flex items-center justify-center sm:flex-col md:flex-row gap-[100px]">
                        {/* ------HERO LEFT------ */}
                        <div className="w-full md:basis-1/2">
                            <h5
                                data-aos="fade-right"
                                data-aos-duration="1500"
                                className="text-black font-[600] text-[16px]"
                            >
                                Hello Welcome
                            </h5>
                            <h1
                                data-aos="fade-up"
                                data-aos-duration="1500"
                                className="text-black font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:leading-[46px] mt-5"
                            >
                                I'm Jennie
                                <br />
                                Frontend Developer
                            </h1>
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1600"
                                data-aos-delay="200"
                                className="flex items-center gap-6 mt-7"
                            >
                                <button className="bg-black text-white py-[10px] px-[10px] rounded-[8px] text-[15px]">
                                    <i class="ri-mail-unread-line mr-2"></i>
                                    Hire me
                                </button>
                                <p className="cursor-pointer font-[400] underline">See portfolio</p>
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1600" className="mt-8 sm:pl-14 sm:pr-10">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt nobis consequuntur culpa
                                soluta accusantium eveniet quidem beatae esse assumenda placeat cumque in labore, quo
                                magni! Maxime commodi quo sit earum!
                            </p>
                            <div
                                data-aos="fade-up"
                                data-aos-duration="1600"
                                data-aos-delay="200"
                                className="font-[600] pt-7 flex gap-6 items-center"
                            >
                                Follow me :<i class="ri-youtube-line cursor-pointer text-[20px]"></i>
                                <i class="ri-github-fill  cursor-pointer text-[20px]"></i>
                                <i class="ri-facebook-fill  cursor-pointer text-[20px]"></i>
                                <i class="ri-instagram-line  cursor-pointer text-[20px]"></i>
                            </div>
                        </div>
                        {/* ------HERO LEFT------ */}

                        {/* ------HERO RIGHT------ */}
                        <img
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            className="h-[400px] rounded-[40%]"
                            src={avataImg}
                            alt=""
                        />
                        {/* ------HERO RIGHT------ */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
