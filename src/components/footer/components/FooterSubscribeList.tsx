import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";


const FooterContactList = () => {
    return (
        <div className="bg-black text-white  h-[400px] p-[15px]">
            <h4 className=" text-[12px] font-semibold font-manrope leading-[16.39px] tracking-[0.01em] gap-8 mb-slide-large text-[#C3AD9C]">Subscribe</h4>
           
            <div>
                <ul className="flex flex-col h-full space-y-4 mt-4">
                    <li className="flex items-center space-x-2 font-manrope font-normal text-[16px] leading-[21.86px] tracking-[0.01em] gap-3">
                        <FontAwesomeIcon icon={faFacebookF} className="size-5" />
                        <a href="#" className="text-white">facebook</a>
                    </li>
                    <li className="flex items-center space-x-2 font-manrope font-normal text-[16px] leading-[21.86px] tracking-[0.01em] gap-3">
                        <FontAwesomeIcon icon={faInstagram} className="size-5" />
                        <a href="#" className="text-white">instagram</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default FooterContactList;
