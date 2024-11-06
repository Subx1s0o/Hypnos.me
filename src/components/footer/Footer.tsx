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
             <div className="text-center bg-black text-white w-[1392px] h-[291px]">
                <h3 className="">Stay in touch</h3>
                <p className="text-center max-w-md mx-auto">Sign up for our newsletter to receive 500 points on your first order, which you can use immediately.</p>
          <form className="flex flex-col items-center space-y-4">
            <input className="w-[396px] h-[40px] p-2 border border-gray-300 rounded-md" type="text" 
               placeholder="Email" />
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