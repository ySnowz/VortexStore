import React from 'react'
import Hero from '../containers/Hero';
import MainSection from '../containers/MainSection';

const Home = () => {

    const MainContainerStyle = "w-full h-full flex flex-col items-center justify-center gap-8";

    return (
        <main className={MainContainerStyle}>
            <Hero />
            <MainSection/>
        </main>
    )
}

export default Home;