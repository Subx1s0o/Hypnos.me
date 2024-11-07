import React from "react";
import FooterInfoList from "./components/FooterInfoList";
import siteMapList from "@/components/common/data/siteMapList.json"
import serviceList from "@/components/common/data/serviceList.json"
import FooterContactList from "./components/FooterContactList";


const Footer: React.FC = () => {
    return (
    <footer className="bg-black">
            <h3 className='text-md font-cormorant text-center'>HYPNOS</h3>
            <div className="flex gap-4 justify-around items-start p-4">
            <FooterInfoList infoList={siteMapList} title='Working hours' />
            <FooterInfoList infoList={serviceList} title='Services' /> 
            <FooterContactList />
            </div>
            <div className="text-center bg-black text-white w-[1392px] h-[291px] flex justify-between items-center px-8">
    <div className="">
        <p className="text-left max-w-[290px] h-[84px] top-[727px] left-[691px]">
            Be the first to know about promotions, raffles and auctions for exclusive jewelry that we conduct only among the sites audience.
        </p>
    </div>

    <form className="flex flex-col items-center space-y-4 w-[50%]">
        <input className="w-[396px] h-[40px] p-2 border border-gray-300 rounded-md" type="text" placeholder="Email" />
        <button className="w-[396px] h-[40px] p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" type="submit">Send</button>
        <label className="flex items-center space-x-2">
            <input className="w-4 h-4" type="checkbox" />
            <span>I agree with the site policy</span>
        </label>
    </form>
</div>

            
    </footer>
        
    );
};
export default Footer;