import React from 'react';

import {Container,SectionGeneral } from './styles'

import PersonalInfo from './components/PersonalInfo'
import ExperienceInfo from './components/ExperienceInfo'
import AcademicInfo from './components/AcademicInfo'
import LanguagesInfo from './components/LanguagesInfo'
import Courses from './components/Courses'

function App() {
  return (
    <Container>
      <PersonalInfo/>
      <SectionGeneral>
        <ExperienceInfo/>
        <AcademicInfo/>
      </SectionGeneral>
      <SectionGeneral>
        <LanguagesInfo/>
        <Courses/>
      </SectionGeneral>
    </Container>
  );
}

export default App;
