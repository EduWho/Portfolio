import styled from "styled-components";
import {useState} from 'react'
import Modal from 'react-modal'

Modal.setAppElement('#root')
function CardProjects(props) {
const[modalIsOpen,setModalIsOpen] = useState(false)

    return (

      <Container>
      <ProjectCard onClick={()=>setModalIsOpen(true)} >
    
        <ProjectImg src={props.img} ></ProjectImg>
        <Text>
        <ProjectTitle>{props.title}</ProjectTitle>
        <OpenModal onClick={()=>setModalIsOpen(true)}>More...</OpenModal>
        </Text>
      </ProjectCard>
        <Modal  style={customStyles}isOpen={modalIsOpen} onRequestClose={()=>setModalIsOpen(false)}>
          <Flex>
          <Image src={props.img} alt="" />
          <TextModal>
          <h2>{props.title}</h2>
          <h4>Languages</h4>
          <p>{props.languages}</p>
          <h4>Project</h4>
          <a href="/">{props.git}</a>

          </TextModal>
          </Flex>
          <Button onClick={()=>setModalIsOpen(false)}>Close</Button>
        </Modal>
    
    </Container>
    
    )


  }

  const OpenModal= styled.button`
    background: none;
    border: none;
    color:#fff;
    
    cursor: pointer;
    transition: 1s ;
    &:hover{
      border-bottom: 2px solid var(--blue);
    }
  `
const Image = styled.img`
width: 50%;
border-radius: 1rem;
`;
  const Container= styled.div``
  const Flex=styled.div`
  display:flex;
  
  column-gap: 2rem;
  margin-bottom: 1rem;
  

  `;
  const customStyles = {
    content: {
      background:'hsl(207,8%,92%)',
      width:'800px',
      height:'400px',
      margin:'auto',

     
    }}

  const ProjectCard= styled.div`
  width: 500px;
  height: 400px;
  position: relative;
  cursor: pointer;
  overflow:hidden;
  
  &:hover {
    opacity: 0.8;
}`;

  const Text= styled.div`
  width: 500px;
  z-index: 0;
 
  
  padding: 16px 24px 24px 24px;
  
  background-color: transparent;
  border: none;

  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
 `;
  const ProjectImg = styled.img`
  width: 100%;
  height: 100%;

  `;
  const ProjectTitle=styled.h3`
  color:#fff;
  opacity: 2;
  `;
  const Button = styled.button`
    padding:.7rem 1.2rem;
    color: #fff;
  background: var(--blue);
  border:none;
  border-radius: .5rem;
  &:hover{
    background-color: #23a0df;
  }

`;

  const TextModal=styled.div`
  width:300px;
  align-items:center ;
  h2{
    text-align: center;
    font-size: 1.25rem;
    margin-bottom: 3rem;
  }
  h4{
    font-size: .938rem;
  }
  p{
    font-size:.813rem;
    margin-bottom: 1rem;
  }
  a{
    text-decoration: none;
    font-size:.813rem;
    color:var(--blue);
    &:hover{
      border-bottom: 1px solid var(--blue);
    }
  }
  
  `;
  export default CardProjects