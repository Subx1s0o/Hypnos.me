import React from "react";
import FooterInfoList from "./components/FooterInfoList";
import serviceList from "@/components/common/data/serviceList.json";
import FooterSubscribeList from "./components/FooterSubscribeList";
import FooterContactList from "./components/FooterContactList";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-black text-white">
            <h3 className="text-md-thin font-cormorant text-center">HYPNOS</h3>
            <div className="flex gap-4 justify-around items-start p-4  bg-black">
                <FooterContactList />
                <FooterInfoList infoList={serviceList} title="Services" />
                <FooterSubscribeList />
            </div>
            <div className="flex  justify-end bg-black text-white px-8 py-12 items-start">
                <p className="text-left max-w-[290px] mr-8 font-manrope leading-[21px]">
                    Be the first to know about promotions, raffles, and auctions for exclusive jewelry, conducted only among the site’s audience.
                </p>
                <form className="flex flex-col items-center  w-[308px] h-[48px]">
                    <input
                        className="w-full h-[40px] p-2 border-none rounded-md mb-4 bg-[#2E2826] outline-none"
                        type="text"
                        placeholder="Email"
                    />
                    <div className="flex items-center  space-x-4 justify-between w-[100%]">
                        <label className="flex items-center space-x-2">
                            <input className="w-4 h-4" type="checkbox" />
                            <span className="text-xs">I agree with the site policy</span>
                        </label>
                        <button
                            className="p-2 text-white bg-gradient-to-b rounded-full"
                            type="submit"
                        >
                            <FaRegArrowAltCircleRight size={42} />
                        </button>
                    </div>
                </form>
            </div>
        </footer>
    );
};

export default Footer;
