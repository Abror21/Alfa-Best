import { ReactNode } from "react"

type Props = {
  text: ReactNode;
  mb?: number;
}

const DefaultText = ({text, mb}:Props) => {
  return (
    <p className={`text-sm sm:text-base md:text-[17px] text-[#1B2330] mb-[${mb ? mb/2 : 0}px] md:mb-[${mb ? mb : 0}px]`}>{text}</p>
  )
}

export default DefaultText