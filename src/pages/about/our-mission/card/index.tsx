import decor from '../../../../assets/images/card-decor.png'

const Card = ({title, img}:{title: string; img: string}) => {
  return (
    <div className='relative shadow-lg rounded-2xl p-[20px] md:p-[30px] flex overflow-hidden min-h-[200px] sm:min-h-[220px] md:min-h-[230px] lg:min-h-[250px]'>
        <img src={decor} alt="decoration" className='absolute top-0 right-0 bottom-0 -z-20 h-full' />
        <div className='flex flex-col justify-between items-start'>
            <h5 className='font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-[#1B2330] max-w-[190px] sm:max-w-[210px] md:max-w-[300px]'>{title}</h5>
            <button>Подробно &#8594;</button>
        </div>
        <img src={img} alt="image" className='absolute top-1/2 -translate-y-1/2 right-0 -z-10 w-[60%] md:w-[50%]' />
    </div>
  )
}

export default Card