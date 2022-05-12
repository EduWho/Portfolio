import React, { useState } from 'react'
import styled from 'styled-components'
import Projects from './Projects';
import Skill from './Skill';

function Buttons() {
  const [activeTab, setActiveTab] = useState("projects")

  return (
    <Container id='buttons'>
      <ContainerButtons>
        <Button className={activeTab === 'projects'? 'active': ''}
        onClick={()=>setActiveTab('projects')}>
          Projects
        </Button>
        <Button className={activeTab === 'skills'? 'active': ''} 
        onClick={()=>setActiveTab('skills')}>
          Skills
        </Button>
      </ContainerButtons>
      {activeTab ==='projects' &&(
        <Projects/>
      )}
      {activeTab ==='skills' &&(
        <Skill/>
      )}

    </Container>
  )
}

const Container = styled.section`
margin: auto;
width: 500px;
.active{
  background-color: #fff;
}
`;

const ContainerButtons = styled.div`

    background-color: var(--title-color);
    padding: .375rem;
    border-radius: .75rem;
    display: flex;
    justify-content: space-between;
    column-gap: .5rem;
    margin-bottom: 5rem;
  
`;
const Button = styled.button`
 width: 100%;
    border:none;
    outline:none;
    padding: 1rem;
    color:black;
    font-size: var(--small-font-size);
    font-family: var(--body-font);
    border-radius: .75rem;
    cursor: pointer;
    background-color: transparent;
    transition: .3s;
    &:hover{
    background-color: #fff;
     }`;   
export default Buttons