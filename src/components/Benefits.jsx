import React from 'react'
import benefits from "../data/benefits.json"

const ContainerCardStyle = "z-[-1] flex flex-row flex-wrap items-center justify-center gap-2"
const CardStyle = "w-[130px] h-[130px] md:w-[200px] md:h-[200px] p-2 bg-purple-100/50 rounded-sm drop-shadow-sm flex flex-col gap-2 items-center justify-center";
const CardImageStyle = "w-[40px] h-[40px] md:w-[75px] md:h-[75px]"
const CardNameStyle = "text-center text-slate-700/75 text-[14px] md:text-lg font-semibold"
const CardDescriptionStyle = "text-center text-slate-500/50 text-[10px] md:text-sm font-medium"

const BenefitsCard = () => {
  return (
    <div className={ContainerCardStyle}>
      {benefits.map((benefit) => (
        <div key={benefit.id} className={CardStyle}>
            <figure className={CardImageStyle}><img src={benefit.Url} alt={benefit.name} /></figure>
            <h2 className={CardNameStyle}>{benefit.name}</h2>
            <p className={CardDescriptionStyle}>{benefit.description}</p>
        </div>
      ))}
    </div>
  )
}

export default BenefitsCard
