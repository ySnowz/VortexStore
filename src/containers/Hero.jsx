import React from 'react'
import BenefitsCard from '../components/Benefits'

const Hero = () => {
  const SectionStyle = "flex flex-col items-center justify-center mt-4";
  const HeroStyle = "w-full flex flex-col items-center justify-center gap-1 my-4";
  const TextGradientStyle = "text-transparent bg-clip-text bg-gradient-to-br from-purple-400 to-purple-600";
  const HeroTextStyle = "text-3xl tracking-widest font-light";
  const HeroTextDescStyle = "text-sm tracking-widest font-light";

  return (
    <section className={SectionStyle}>
      <div className={HeroStyle}>
        <h1 className={HeroTextStyle}>V<span className={TextGradientStyle}>O</span>RTEX <span className={TextGradientStyle}>STORE</span></h1>
        <h3 className={HeroTextDescStyle}>The best item for you with the <span className={TextGradientStyle}>best price</span></h3>
      </div>
      <BenefitsCard />
    </section>
  )
}

export default Hero
