import React from 'react';
import portfolios from '../../assets/data/portfolios';
const Modal = ({ setShowModal, activeID }) => {
    const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);
    return (
        <div className="w-full h-full fixed top-0 left-0 z-10 bg-gray-600 bg-opacity-40">
            <div className="max-w-[600px] absolute top-1/2 left-1/2  z-20 bg-white rounded-[8px] transform -translate-x-1/2 -translate-y-1/2 p-5">
                <div>
                    <figure>
                        <img className="rounded-[8px]" src={portfolio.imgUrl} alt="pic" />
                    </figure>
                </div>
                <div>
                    <h2 className="text-2xl text-black font-[700] my-3">{portfolio.title}</h2>
                    <p className="text-[15px] leading-7 text-black ">{portfolio.description}</p>
                    <div className="mt-5 flex items-center gap-3 flex-wrap">
                        <h4 className="text-[18px] text-[700]">Technologies : </h4>
                        {portfolio.technologies.map((item, index) => (
                            <span key={index} className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0">
                                {item}
                            </span>
                        ))}
                    </div>
                    <a href="#">
                        <button className="bg-black text-white py-2 px-4 mt-3 rounded-[8px] font-[500] hover:bg-gray-500 ease-in duration-300">
                            Live Site
                        </button>
                    </a>
                </div>
                <button
                    onClick={() => setShowModal(false)}
                    className="w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[20px] flex items-center justify-center rounded leading-0 cursor-pointer"
                >
                    <i class="ri-close-line"></i>
                </button>
            </div>
        </div>
    );
};

export default Modal;
