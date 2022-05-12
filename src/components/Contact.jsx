import React from 'react'
import styled from 'styled-components'
import {BiArrowToBottom} from 'react-icons/bi'
import {FaWhatsapp} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi';
import CV from '../assets/Eduardo.pdf'

function Contact() {
  return (
    <Container id='contact'>
        <Button href={CV}>Download CV <BiArrowToBottom/></Button>
        <Sep>
          <SmallButton href='https://api.whatsapp.com/send?phone=351910478550&text=Hello, more information!'><FaWhatsapp/></SmallButton>
          <SmallButton href='mailto: eduardog.geral@gmail.com'><HiOutlineMail/></SmallButton>
        </Sep>
    </Container>
  )
}

const Container= styled.section`
    text-align:center;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 1rem;
    margin-bottom: 2rem;
`;
const Button = styled.a`
    display:inline-flex;
    align-items: center;
    text-decoration: none;
    column-gap: 0.5rem;
    background-color:var(--blue);
    color:#fff;
    padding:1.15rem 1.5rem;
    border: none;
    border-radius: 0.5rem ;
    transition: .3s;
    box-shadow: 0 8px 24px hsla(207,91%,61%,.25);

&:hover{
  background:#23a0df;
}
`;
const Sep =styled.div`
display: flex;
column-gap:0.25rem;
justify-content: center;
align-items: center;
`;
const SmallButton = styled.a`
background: var(--title-color);
color:black;
border: none;
padding:0.6rem 0.7rem 0.5rem;
box-shadow: none;

svg{
  font-size:1.1rem;
}
border-radius: .5rem;
&:hover{
  background-color: hsl(207, 8%, 75%);
}
 `;

export default Contact