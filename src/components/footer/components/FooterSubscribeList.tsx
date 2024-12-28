// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

// const FooterContactList = () => {
//     return (
//         <div className="bg-black text-white  h-[400px] p-[15px]">
//             <h4 className=" text-[12px] font-semibold font-manrope leading-[16.39px] tracking-[0.01em] gap-8 mb-slide-large text-brown">Subscribe</h4>

//             <div>
//                 <ul className="flex flex-col h-full space-y-4 mt-4">
//                     <li className="flex items-center space-x-2 font-manrope font-normal text-[16px] leading-[21.86px] tracking-[0.01em] gap-3">
//                         <svg className="w-[11px] h-[11px] rounded-[2px] bg-[#C3AD9C] " >
//                             <use href="#icon-facebook"></use>
//                         </svg>
//                         <a href="#" className="text-white">Facebook</a>
//                     </li>
//                     <li className="flex items-center space-x-2 font-manrope font-normal text-[16px] leading-[21.86px] tracking-[0.01em] gap-3">
//                         <svg className="w-[11px] h-[11px] rounded-[2px] bg-[#C3AD9C]">
//                             <use href="#icon-instagram"></use>
//                         </svg>
//                         <a href="#" className="text-white">Instagram</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>
//     );
// };

// export default FooterContactList;

const FooterContactList = () => {
  return (
    <div className='h-[400px] bg-black p-[15px] text-white'>
      <h4
        className='mb-slide-large gap-8 font-manrope text-[12px] font-semibold leading-[16.39px]
          tracking-[0.01em] text-[#C3AD9C]'>
        Subscribe
      </h4>

      <div>
        <ul className='mt-4 flex h-full flex-col space-y-4'>
          <li
            className='flex items-center gap-3 space-x-2 font-manrope text-[16px] font-normal
              leading-[21.86px] tracking-[0.01em]'>
            <a
              href='#'
              className='flex items-center space-x-2'>
              <svg
                className='size-8'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'>
                <circle
                  cx='16'
                  cy='16'
                  r='16'
                  fill='#2E2826'
                />
                <rect
                  x='10.5'
                  y='10.5'
                  width='11'
                  height='11'
                  rx='2'
                  fill='#C3AD9C'
                />
              </svg>
              <span className='text-[16px] text-white'>Instagram</span>
            </a>
          </li>

          <li
            className='flex items-center gap-3 space-x-2 font-manrope text-[16px] font-normal
              leading-[21.86px] tracking-[0.01em]'>
            <a
              href='#'
              className='flex items-center space-x-2'>
              <svg
                className='size-8'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 32 32'>
                <circle
                  cx='16'
                  cy='16'
                  r='16'
                  fill='#2E2826'
                />
                <rect
                  x='10.5'
                  y='10.5'
                  width='11'
                  height='11'
                  rx='2'
                  fill='#C3AD9C'
                />
              </svg>
              <span className='text-[16px] text-white'>FaceBook</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default FooterContactList
