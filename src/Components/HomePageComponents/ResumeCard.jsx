import React from 'react'
import WorkExperience from '../WorkExperience'
import ProjectExperience from '../ProjectExperience'
import VolunteerExperience from '../VolunteerExperiences'

function ResumeCard() {
  return (
    <div>
        <section ref={myElementRef} id="WorkExperience">
        <br />
        <WorkExperience />
        </section>
        <section id="Projects">
        <br />
        <ProjectExperience ProgLang />
        </section>
        <section ref={myElementRef} id="VolunteerExperience">
        <br />
        <VolunteerExperience />
        </section>
    </div>
  )
}

export default ResumeCard