import icon from '../../assets/icons/logo.png';

interface Props {
  title: string;
  color?: string;
}

const DefaultTitle = ({ title, color }: Props) => {
  return (
    <>
      <img src={icon} alt="" className='w-[20px]' />
      <h3
        className={`${color ? color : 'text-[#1B2330]'} text-[24px] md:text-[30px] lg:text-[34px] font-bold mb-[10px] md:mb-[20px]`}
      >
        {title}
      </h3>
    </>
  )
}

export default DefaultTitle;