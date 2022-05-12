import React from 'react'
import {BsCheckCircle} from 'react-icons/bs'
import styled from 'styled-components'

function CardSkills(props) {
  return (
    <SkillCard>
    <BsCheckCircle/>
    <Text>
      <SkillName>{props.name}</SkillName>
      <SkillLevel>{props.level}</SkillLevel>
    </Text>
  </SkillCard>
  )
}
const SkillCard= styled.div`
display:flex;
column-gap: .5rem;
justify-content: flex-start;
align-items:flex-start;
svg{
  color:var(--blue);
  font-size:.8rem;
}`;
const Text = styled.div`
align-self: flex-start;
`;
const SkillName= styled.h3`
font-size: 1rem;
font-weight: 500;
line-height: 18px;`;
const SkillLevel= styled.span`
font-size:.75rem`;


export default CardSkills