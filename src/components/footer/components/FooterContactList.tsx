import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const FooterContactList = () => {
    return (
        <div className="bg-black text-white w-[330px] h-[400px] p-[15px]">
            <h4 className="text-left text-[24px] font-bold leading-[29.06px] tracking-[0.03em]">Subscribe</h4>
            
            <div>
                <ul className="flex flex-col h-full space-y-4 mt-4">
                    <li className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faFacebookF} className="w-5 h-5" />
                        <a href="#" className="text-white">facebook</a>
                    </li>
                    <li className="flex items-center space-x-2">
                        <FontAwesomeIcon icon={faInstagram} className="w-5 h-5" />
                        <a href="#" className="text-white">instagram</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FooterContactList;
