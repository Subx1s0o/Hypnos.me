import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";


const FooterContactList = () => {
    return (
        <div className="bg-black text-white w-[330px] h-[400px] p-[15px]">
            <h4 className="text-left text-[12px] font-semibold font-manrope leading-[16.39px] tracking-[0.01em] gap-8 mb-[32px]">Schedule</h4>
            <div className="flex gap-10">
                <p>Mon—Fri</p>
                <p>10:00 — 19:00</p>
            </div>
            <div className="flex gap-10">
                <p>Sat—Sun</p>
                <p>By appointment only</p>
            </div>
           
            
        </div>
    );
};


export default FooterContactList;


