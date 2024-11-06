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
            <h4 className="text-center">{title}</h4>
            <ul className="">
                {infoList.map(({ id, text }) => <li key={id} className="text-right">{ text}</li>) }
            </ul>
       </div>
        
    );
};
export default FooterInfoList;