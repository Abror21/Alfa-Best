import DefaultText from "../../../../components/default-text"
type Props = {
    num: string;
    text: string;
    img: string;
}

const PurposeItem = ({ num, text, img }: Props) => {
    return (
        <div className="flex justify-between py-1 md:py-2">
            <div className="w-full items-center border-b-2 flex gap-4 sm:gap-6 md:gap-8 lg:gap-14 pr-3 sm:pr-5 md:pr-7">
                <span className="text-base md:text-xl font-semibold">{num}</span>
                <DefaultText text={text} />
            </div>
            <img src={img} alt="image" className="w-[100px] sm:w-[110px] object-cover"/>
        </div>
    )
}

export default PurposeItem