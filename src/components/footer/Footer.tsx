'use client';
import React from "react";
import FooterInfoList from "./components/FooterInfoList";
import serviceList from "./components/common/data/serviceList.json";
import FooterSubscribeList from "./components/FooterSubscribeList";
import FooterContactList from "./components/FooterContactList";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
// import FormInput from "../ui/FormInput";


const Footer: React.FC = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("Form submitted");
    };

    return (
        <footer className="bg-black text-white pb-[24px]">
            <div className="w-[1280px] py-0 px-[43px] my-0 mx-auto">
            <h3 className="text-md-thin font-cormorant text-center py-4">HYPNOS</h3>
            <div className="flex gap-4 justify-around items-start p-4 bg-black">
                <FooterContactList />
                <FooterInfoList infoList={serviceList} title="Services" />
                <FooterSubscribeList />
            </div>
            <div className="flex justify-end bg-black text-white px-8 py-12 items-start border-t border-b border-white">
                <p className="text-left max-w-[290px] mr-8 font-manrope leading-[21px]">
                    Be the first to know about promotions, raffles, and auctions for exclusive jewelry, conducted only among the site’s audience.
                </p>
                
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center w-[308px] space-y-4"
                >
                    <input
                        className="w-full h-[40px] p-2 border-none rounded-md bg-[#2E2826] outline-none"
                        type="text"
                        name="email"
                        placeholder="Email"
                        required
                    />
                    <div className="flex items-center justify-between w-full">
                        <label className="flex items-center space-x-2">
                            <input
                                className="w-4 h-4"
                                type="checkbox"
                                name="policyAgreement"
                                required
                            />
                            <span className="text-xs">I agree with the site policy</span>
                        </label>
                        <button
                            className="p-2 text-white bg-gradient-to-b from-gray-800 to-gray-600 hover:from-gray-600 hover:to-gray-400 rounded-full"
                            type="submit"
                        >
                            <FaRegArrowAltCircleRight size={42} />
                        </button>
                    </div>
                </form>
                </div>
               
                    <span className="mr-[52px]">Credentials</span>
                    <span className="mr-[52px]">Customer Agreement</span>
                    <span className="mr-[237px]">Data processing policy</span>
                
                    <span className="mr-[24px]">2024 © Hypnos</span>
                    <span>All rights reserved</span>
               
                    
                </div>
        </footer>
    );
};

export default Footer;
