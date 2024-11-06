const FooterContactList = () => {
    return (
        <div className="bg-black text-white w-[330px] h-[400px] p-[15px]">
            <h4 className="text-center text-[24px] font-bold leading-[29.06px] tracking-[0.03em]">Contacts</h4>
            <ul className="">
                <li className="text-right"><p className="">Telephone</p> 
            <a href='tel:12155550199'>+1 215-555-0199</a>
          </li>
                <li className="text-right"><p className="">Email</p> 
            <a href='mailto:cs@hypnos.store'>cs@hypnos.store</a></li>
                <li className="text-right"><p className="">Monday-Friday</p> <p className="">10:00-19:00</p> </li>
                <li className="text-right"><p className="">Saturday-Sunday</p> <p className="">Pre-registration</p></li>
            </ul>
            <div className="text-center">
                <p className="">Office/Showroom address</p> <p className="">street Elektrozavodskaya 21</p>
            </div>
            <div className="">
                <ul className="">
                    <li className="text-right">
                        <a href='#'>facebook</a> 
                    </li>
                    <li className="text-right">
                         <a href='#'>instagram</a> 
                    </li>
                    <li className="text-right">
                         <a href='#'>linkedin</a>
                    </li>
                </ul>

            </div>
           
        </div>
        
        
    );
};
export default FooterContactList;