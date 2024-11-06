import React from "react";
import FooterInfoList from "./components/FooterInfoList";
import siteMapList from "@/components/common/data/siteMapList.json"
import serviceList from "@/components/common/data/serviceList.json"
import loewHelpsList from "@/components/common/data/LoewHelpsList.json"
import FooterContactList from "./components/FooterContactList";


const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900">

           
            <h3 className='text-md-thin font-cormorant'>HYPNOS</h3>
            <div className="flex gap-4 justify-around items-start p-4">
            <FooterInfoList infoList={siteMapList} title='site map' />
            <FooterInfoList infoList={serviceList} title='service' /> 
            <FooterContactList />
            <FooterInfoList infoList={loewHelpsList} title='loe info' /></div>
             <div className="text-center bg-black text-white">
                <h3 className="">Stay in touch</h3>
                <p className="">Sign up for our newsletter to receive 500 points on your first order, which you can use immediately.</p>
                <form className="flex flex-col items-center space-y-4">
                    <input className="p-2 border border-gray-300 rounded-md" placeholder="Email" />
                    <button className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600" type="submit" >Send</button>
                    <label><input className="flex items-center space-x-2" type="chekbox" />I agree with the site policy</label>
                </form>
                
            </div>
            
        </footer>
        
    );
};
export default Footer;