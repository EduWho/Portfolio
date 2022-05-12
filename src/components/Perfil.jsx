import React from 'react'
import styled from 'styled-components'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiGithub} from 'react-icons/fi'
import Mask from '../assets/Mask.png'

function Perfil() {
  return (
    <Container id='nav'>
        <ProfileData>
            <Foto>
                <ProfileBackground>
                    <img src={Mask} alt="Foto de perfil" />
                </ProfileBackground>
            </Foto>
            <Text>
            <h2>Eduardo Gonçalves</h2>
            <h3>Web developer</h3>
            </Text>
            <ProfileSocial>
                <IconLink href="" target="_blank"><FiGithub/></IconLink>
                <IconLink href="" target="_blank"><AiOutlineLinkedin/></IconLink>
            
            </ProfileSocial>
        </ProfileData>
    </Container>
  )
}

const Container= styled.section`
display:grid;
justify-content: center;
margin-top: 5rem;

`;
const ProfileData = styled.div`
text-align:center ;

`;
const Text = styled.div`
h2{
    font-size: 1.25rem;
    margin-top: 1rem;
}
h3{
    font-size: 1rem;
    color:var(--text-color);
    margin-bottom: 1rem;
    font-weight: 400;
}
`;

const ProfileBackground = styled.div`
height: 105px;
width: 105px;
background: linear-gradient(180deg,var(--gradient-blue),var(--gradient-darkBlue));
border-radius: 50%;
text-align:center;
overflow: hidden;
display: flex;
align-items: flex-end;
justify-items: center;


img{
    width:100px
    
}



`;
const Foto = styled.div`
border: 3.5px solid hsl(207,90%,61%);
border-radius: 50%;
justify-self: center;
width: 115px;
height: 115px;
display:grid;
place-items: center;
margin: auto;


`;
const ProfileSocial = styled.div`
display: flex;
justify-content: center;
column-gap: 0.75rem;
margin-bottom: 2rem;
`;
const IconLink = styled.a`
font-size: 1.25rem;
color:hsl(207,12%,15%);
transition:.3s;

 &:hover{
     color:var(--blue);
 }
`;

export default Perfil