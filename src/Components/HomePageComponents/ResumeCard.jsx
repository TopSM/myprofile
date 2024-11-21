import React from 'react'
import WorkExperience from '../WorkExperience'
import ProjectExperience from '../ProjectExperience'
import VolunteerExperience from '../VolunteerExperiences'

function ResumeCard({language,setLanguage}) {
    
    return (
    <div>
        <section ref={myElementRef} id="WorkExperience">
        <br />
        <WorkExperience />
        </section>
        <section id="Projects">
        <br />
        <ProjectExperience language={language} setLanguage={setLanguage} />
        </section>
        <section ref={myElementRef} id="VolunteerExperience">
        <br />
        <VolunteerExperience />
        </section>
    </div>
  )
}

export default ResumeCard