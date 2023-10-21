import React from "react"
import HomeSection from "./Home/HomeSection"
import AboutSection from './Home/AboutSection'
import BasicInfo from './Home/BasicInfo'
import AimAndScope from './Home/AimAndScope'
import Objective from './Home/Objective'
import GuideLines from './Home/GuideLines'
import Info from './Home/Info'

const Home = () => {
    return (
        <div>
            <HomeSection />
            <AboutSection />
            <BasicInfo />
            <AimAndScope />
            <Objective />
            <GuideLines />
            <Info />
        </div>
    )
}

export default Home