import React from 'react'
import styled from 'styled-components'
import CardSkills from './CardSkills';

function Skill() {
  return (
   <Container>
       <SkillsArea>
         <SkillsTitle>
           Frontend developer
         </SkillsTitle>
         <SkillsGroup>
           <CardSkills name={"Git"} level={"Basic"}/>
           <CardSkills name={"HTML"} level={"Intermediate"}/>
           <CardSkills name={"CSS"} level={"Intermediate"}/>
           <CardSkills name={"JavaScript"} level={"Basic"}/>
           <CardSkills name={"React"} level={"Basic"}/>
           <CardSkills name={"Bootstrap"} level={"Basic"}/>

         </SkillsGroup>

       </SkillsArea>
       <SkillsArea>
         <SkillsTitle>
           Backend developer
         </SkillsTitle>
         <SkillsGroup>
           <CardSkills name={"MySQL"} level={"Intermediate"}/>
           <CardSkills name={"C"} level={"Basic"}/>
           <CardSkills name={"PHP"} level={"Basic"}/>
           <CardSkills name={"Firabase"} level={"Basic"}/>
           

         </SkillsGroup>

       </SkillsArea>
      
   </Container>
  )
}
const Container =styled.section`
display:flex;
justify-content: center;
column-gap:4.5rem;


`;
const SkillsArea = styled.div`


`; 
const SkillsTitle = styled.h3`
text-align: center;
font-size: 1rem;
margin-bottom:2rem`; 
const SkillsGroup = styled.div`
display: grid;
justify-content: center;
row-gap: 1rem;
grid-template-columns:repeat(2,100px)`; 

 
export default Skill