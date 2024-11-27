import React from 'react'
import WorkExperience from './WorkExperience'
import ProjectExperience from './ProjectExperience'
import VolunteerExperience from './VolunteerExperiences'
// import ResumerCardExperiences from './ResumerCardExperiences'
function ResumeCard({language,setLanguage, myElementRef,experienceCard,setExperienceCard}) {

  let showMyExpriences =(ec)=>{
    // console.log(ec)
      if(ec == "WorkExperience"){
        return (
          <React.Fragment>
            <section ref={myElementRef} id="WorkExperience">
              <br />
              <WorkExperience />
          </section>
          </React.Fragment>
        );
      }
      if(ec == "Projects"){
        return (
          <React.Fragment>
            <section ref={myElementRef} id="Projects">
              <br />
              <ProjectExperience language={language} setLanguage={setLanguage}/>
          </section>
          </React.Fragment>
        );
      }
      if(ec == "VolunteerExperience"){
        return (
          <React.Fragment>
            <section ref={myElementRef} id="VolunteerExperience">
              <br />
              <VolunteerExperience />
          </section>
          </React.Fragment>
        );
      }
    };
    return (
    <section  className="my-info" id="my-info">
        {showMyExpriences(experienceCard)}
    </section>
  )
}

export default ResumeCard