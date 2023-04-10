import React from 'react';
import { useEffect, useState } from 'react';
import data from '../../assets/data/portfolios';
import Modal from './Modal';
import portfolios from '../../assets/data/portfolios';
const Portfolio = () => {
    const [items, setItems] = useState(3);
    const [allData, setAllData] = useState(data);
    const [selectTabs, setSelectTabs] = useState('all');
    const [activeID, setActiveID] = useState('null');
    const [showModal, setShowModal] = useState(false);

    const showModalHandler = (id) => {
        setShowModal(true);
        setActiveID(id);
    };

    const loadMoreHandle = () => {
        setItems((prev) => prev + 3);
    };

    const slice = allData.slice(0, items);

    useEffect(() => {
        if (selectTabs === 'all') {
            setAllData(data);
        }
        if (selectTabs === 'web-design') {
            const filter = data.filter((item) => item.category === 'Web Design');
            setAllData(filter);
        }
        if (selectTabs === 'ux') {
            const filter = data.filter((item) => item.category === 'Ux');
            setAllData(filter);
        }
    }, [selectTabs]);
    return (
        <section id="portfolio">
            <div className="container">
                <div className="flex items-center justify-between flex-wrap">
                    <div className="mb-7 sm:mb-0">
                        <h3 className="text-black text-[2rem] font-[700]">My recent projects</h3>
                    </div>
                    <div className="flex gap-3">
                        <button
                            onClick={() => {
                                setSelectTabs('all');
                            }}
                            className="text-black border  border-solid border-black py-2 px-4 rounded-[10px]"
                        >
                            All
                        </button>
                        <button
                            onClick={() => {
                                setSelectTabs('web-design');
                            }}
                            className="text-black border  border-solid border-black py-2 px-4 rounded-[10px]"
                        >
                            Web Design
                        </button>
                        <button
                            onClick={() => {
                                setSelectTabs('ux');
                            }}
                            className="text-black border  border-solid border-black py-2 px-4 rounded-[10px]"
                        >
                            UX design
                        </button>
                    </div>
                </div>
                <div className="flex items-center gap-4 flex-wrap mt-12">
                    {slice.map((portfolio, index) => (
                        <div
                            key={index}
                            className="group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1] cursor-pointer"
                        >
                            <figure>
                                <img className="rounded-[8px]" src={portfolio.imgUrl} alt="pic" />
                            </figure>
                            <div className="w-full h-full bg-gray-300 bg-opacity-40 absolute top-0 left-0 z-[5] hidden group-hover:block">
                                <div className="w-full h-full flex items-center justify-center">
                                    <button
                                        onClick={() => showModalHandler(portfolio.id)}
                                        className="bg-rose-500 text-white px-4 py-3 rounded-[10px]"
                                    >
                                        See Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-6">
                    {items < portfolios.length && data.length > 6 && (
                        <button
                            onClick={loadMoreHandle}
                            className="text-white bg-rose-600 hover:bg-rose-400 py-2 px-4 rounded-[8px] "
                        >
                            More
                        </button>
                    )}
                </div>
            </div>
            {showModal && <Modal setShowModal={setShowModal} activeID={activeID} />}
        </section>
    );
};

export default Portfolio;
