import icon from '../../assets/icons/logo.png';

const DefaultTitle = ({ title }: { title: string }) => {
  return (
    <>
      <img src={icon} alt="" className='w-[20px]' />
      <h3
        className='text-[#1B2330] text-[24px] md:text-[34px] font-bold mb-[10px] md:mb-[20px] lg:mb-[20px]'
      >
        {title}
      </h3>
    </>
  )
}

export default DefaultTitle;