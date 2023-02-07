
const CardPart = ({info}) => {
    const {id,title1,title2,image} = info;
    return (
        <div className="flex p-5" >
            <img className="w-[100px] rounded-[20px] mr-[30px] h-[100px]" src={image} alt="vector portal" />
            <div>
            <p className="text-[20px] font-bold text-white">{title1}</p>
            <p className="text-[20px] font-bold text-white">{title2}</p>
            <p className="text-blue-400 mt-[16px]">Learn more </p>
            </div>
        </div>
    );
};

export default CardPart;