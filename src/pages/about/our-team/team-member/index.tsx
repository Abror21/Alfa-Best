
const TeamMember = ({img, name, position}:{img:string; name:string; position: string}) => {
  return (
    <div>
      <img src={img} alt="" className="w-full rounded-xl mb-2"/>
      <h5 className="text-[#1B2330] text-base font-bold">{name}</h5>
      <span className="text-[#8D9197] text-base">{position}</span>
    </div>
  )
}

export default TeamMember