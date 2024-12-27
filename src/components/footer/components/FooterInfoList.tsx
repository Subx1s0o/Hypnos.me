interface ListItem {
    id: number;
    text: string;
}


interface IProps {
    title: string;
    infoList: ListItem[];
}
const FooterInfoList = ({ title, infoList }:IProps) => {
    return (
        <div className="bg-black text-white w-[330px] h-[400px] p-[15px]">
            <h4 className="text-left text-[12px] font-manrope font-semibold leading-[16.39px] tracking-[0.01em] mb-4 mb-[32px]">{title}</h4>
            <ul className="flex flex-col gap-3">
                {infoList.map(({ id, text }) => <li key={id} className="text-left font-manrope font-normal text-[16px] leading-[21.86px] tracking-[0.01em] gap-3">{ text}</li>) }
            </ul>
       </div>
       
    );
};
export default FooterInfoList;

