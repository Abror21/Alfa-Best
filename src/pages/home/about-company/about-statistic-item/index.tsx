
type Props = {
    img: string;
    title: string;
    area?: string;
    text: string;
}

const AboutStatisticItem = ({img, title, area, text}: Props) => {
    return (
        <div>
            <div className="flex items-center mb-[5px] sm:mb-[10px] text-[#1B2330]">
                <img src={img} alt="icon" className="mr-[8px] sm:mr-[10px] w-[25px] md:w-[35px]"/>
                <h5 className="text-lg sm:text-2xl lg:text-3xl font-medium mr-1">{title}</h5>
                <span className="text-xs sm:text-sm md:text-lg">{area}</span>
            </div>
            <p className="max-w-[180px] text-[#8B8B8B] text-sm sm:text-base md:text-lg">{text}</p>
        </div>
    )
}

export default AboutStatisticItem