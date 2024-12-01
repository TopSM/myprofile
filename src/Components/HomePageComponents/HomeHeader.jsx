import React,{useEffect} from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';

import logo from "./../../Pictures/Pfp.jpg";
import SunsetParkBanner from "./../../Pictures/SunsetParkBanner.jpg";
import SocialIconList from './../SocialIconList';
import MyUpButton from "./MyUpButton"
function HomeHeader({color,experienceCard,setExperienceCard}) {
    const experienceClick = (exp) =>{
        setExperienceCard(()=>exp)
    }

    let introClassString = "intro-resize intro-card-layout intro-card-portait ";

    introClassString += color? "color-toggle-white":  "color-toggle-black" 
    useEffect(() => {    
        document.getElementById('header-title')?.scrollIntoView({ behavior: 'smooth' })    
        setExperienceCard(()=>"WorkExperience")
    }, []);    

  return (
    <header className="header-title">
        <AnimationOnScroll
            animateIn="animate__zoomIn"
            initiallyVisible={true}
            animateOut="animate__zoomOut"
            duration={3}
            animateOnce={true}
        >
        <img 
            src={SunsetParkBanner} 
            alt="sunsetpark" 
            className="banner mobile-banner"/>            
        </AnimationOnScroll>

        <div className={introClassString}>

            <AnimationOnScroll
                duration={2}
                animateIn="animate__zoomIn"
                animateOnce={true} 
            >
                <img
                    src={logo}
                    alt="Ostavo"
                    className="pfp-portrait pfp-resize standard-fitting standard-opacity"
                />
            </AnimationOnScroll>

            <AnimationOnScroll 
                animateIn="animate__fadeInRight"
                animateOnce={true}>
                <div className="text-intro text-intro-portrait">
                    <h1 className="my-name my-name-portrait sections-color">Ostavo Palacios</h1>
                    <p className="header-text-resize">
                        Ostavo Palacios received his B.E. in Computer Engineering from the The City College 
                        of New York in 2021. He is Born and raised in NYC and is a first generation college 
                        graduate. He is currently employed at Lockheed Martin as an associate software engineer 
                        creating products to further help this country. Ostavo has a strong interest in helping 
                        others and hopes to use his skillset to educate, and motivate the next generation. His 
                        creativity and adaptaibility allows him to learn and create new products as quickly and 
                        as efficiently as possible. Ostavo Palacios has taken leadership positions in college, 
                        leading a web development project for the club organization LAESA-SHPE, worked in the 
                        education field as a reasearch assistant and as an after school teacher, and joined a 
                        startup as a Chief technical officer for a helper-study React Application. He is very 
                        flexible which allow him to be open to many roads and possibilities. He enjoys being a 
                        jack of all trades, learning from many different fields in music, science, and arts and 
                        incorporating his interest into his work whenver he can.
                    </p>
                </div> 
                
            </AnimationOnScroll >
            <div className='social-icon-card'>
                    <SocialIconList/>  
            </div>                     
        </div>
        </header>
  )
}

export default HomeHeader