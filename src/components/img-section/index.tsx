import DefaultTitle from "../default-title";
// import img from '../../assets/images/career-bg.jpg'

const ImgSection = ({ bgImg }: { bgImg: string }) => {
    return (
        <div className=''>
            <div className={`h-[60vw] sm:h-[40vw] md:h-[35vw] bg-cover bg-center bg-no-repeat mt-[15px] md:mt-[32px] rounded-3xl pt-[20px] md:pt-[40px] pb-[10px] md:pb-[20px] px-[20px] md:px-[30px] flex items-end`}>
                <div>
                    <DefaultTitle title="Профиль компании" color='text-white' />
                </div>
            </div>
        </div>
    )
}

export default ImgSection;