import React from 'react'
import WorkExperience from './WorkExperience'
import ProjectExperience from './ProjectExperience'
import VolunteerExperience from './VolunteerExperiences'
function ResumeCard({
  color,
  language,
  setLanguage, 
  myElementRef,
  experienceCard,
  setExperienceCard}) {

  let showMyExpriences =(ec)=>{
      if(ec == "WorkExperience"){
        return (
          <React.Fragment>
            <section ref={myElementRef} id="WorkExperience">
              <WorkExperience />
          </section>
          </React.Fragment>
        );
      }
      if(ec == "Projects"){
        return (
          <React.Fragment>
            <section ref={myElementRef} id="Projects">
              <ProjectExperience language={language} setLanguage={setLanguage} setExperienceCard={setExperienceCard}/>
          </section>
          </React.Fragment>
        );
      }
      if(ec == "VolunteerExperience"){
        return (
          <React.Fragment>
            <section ref={myElementRef} id="VolunteerExperience">
              <VolunteerExperience />
          </section>
          </React.Fragment>
        );
      }
    };

    let infoClasses = "section-format "

    infoClasses += color? "color-toggle-white":  "color-toggle-black"
    return (
    <section  className={infoClasses} id="my-info">
        {showMyExpriences(experienceCard)}
    </section>
  )
}

export default ResumeCard