'use client';
import React from "react";
import FooterInfoList from "./components/FooterInfoList";
import serviceList from "./components/common/data/serviceList.json";
import FooterSubscribeList from "./components/FooterSubscribeList";
import FooterContactList from "./components/FooterContactList";
import SubscribeForm from "../forms/SubscribeForm";
import Icon from '@/components/ui/Icon'
import Link from 'next/link'



const Footer: React.FC = () => {

    return (
        <footer className="bg-black text-white pb-[24px] pt-[62px]">
            <div className="w-[1280px] py-0 px-[43px] my-0 mx-auto">
                <div>
                <Link
            href='/'
            className='my-0 mx-auto block '>
            <Icon
              id='icon-logo'
              className='text-brown'
              w={150}
              h={35}
            />
                    </Link>
                    </div>
            <div className="flex gap-4 justify-between items-start p-4 bg-black">
                <FooterContactList />
                <FooterInfoList infoList={serviceList} title="Services" />
                <FooterSubscribeList />
            </div>
            <div className="flex justify-end bg-black text-white  py-12 items-start border-y border-white mb-[24px]">
                <p className="text-left max-w-[290px] mr-8 font-manrope leading-[21px] text-brown text-[14px]
  ">
                   Be the first to know about promotions, raffles and auctions for exclusive jewellery, which we hold only among the site&apos;s audience.
                </p>
                    <SubscribeForm className=' pb-16 md:col-start-2 '/>  
                </div>
               
                    <span className="mr-[52px] text-[12px]">Credentials</span>
                    <span className="mr-[52px] text-[12px]">Customer Agreement</span>
                    <span className="mr-[170px] text-[12px]">Data processing policy</span>
                
                    <span className="mr-[24px] text-brown text-[12px]">2024 © Hypnos</span>
                    <span className="text-brown text-[12px]">All rights reserved</span>
               
                    
                </div>
        </footer>
    );
};

export default Footer;
