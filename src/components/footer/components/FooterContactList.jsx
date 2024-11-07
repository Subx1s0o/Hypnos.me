const FooterContactList = () => {
    return (
        <div className="bg-black text-white w-[330px] h-[400px] p-[15px]">
            <h4 className="text-left text-[12px] font-manrope font-semibold leading-[16.39px] tracking-[0.01em] mb-4">Schedule</h4>
            <ul className="">
                <li className="flex gap-5">
                    <p style={{marginRight: '50px'}} className="">Monday-Friday</p><p>10.00-19.00</p>
                </li>
                <li className="flex gap-5"> <p style={{marginRight: '30px'}} className="">Saturday-Sunday</p><p>By appointment</p></li>
            </ul>
       </div>
        
    );
};
export default FooterContactList;