import icon from '../../assets/icons/logo.png'

interface Props{
  img: string;
  title: string;
  text: string;
}

const DefaultAlfa = ({img, title, text}: Props) => {
  return (
    <div className={`bg-${img} h-[60vw] md:h-[40vw] bg-cover bg-center bg-no-repeat mt-[40px] md:mt-[60px]`}>
      <div className='h-full bg-gradient-to-r from-[rgba(0,0,0,0.5)] to-transparent'>
        <div className='container mx-auto px-[15px]'>
          <div className="w-[80%] sm:w-[50%] pt-3 sm:pt-5 md:pt-10">
            <div className='flex items-center gap-[10px] mb-3 sm:mb-8 md:mb-10 lg:mb-14'>
              <img src={icon} alt="icon" className='w-6 sm:w-8 md:w-10' />
              <span className='text-white text-sm sm:text-base md:text-xl'>Alfa Best</span>
            </div>
            <h3 className='text-sm sm:text-base md:text-xl lg:text-3xl text-white font-bold mb-2 md:mb-[15px]'>{title}</h3>
            <hr className='h-[2px] w-[70%] bg-white mb-2 md:mb-[15px]' />
            <p className='text-xs sm:text-sm lg:text-xl text-white font-medium'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DefaultAlfa;