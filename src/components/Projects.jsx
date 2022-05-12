
import styled from 'styled-components'
import CardProjects from './CardProjects'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.jpg'
import project3 from '../assets/project3.jpg'
import project4 from '../assets/project4.jpg'




function Projects() {

  return (
    
    <Container id="project">
    
        
          <CardProjects
            img={project1} title={"sssaass"} languages={"HTML/CSS"} git={"www.git.com"}   
          />
          <CardProjects
            img={project2} title={"sssaass"} languages={"React/styledComponents"} git={"www.git.com"}    
          />
          <CardProjects
            img={project3} title={"sssaass"}  languages={"HTML/CSS/bootstrap"} git={"www.git.com"}   
          />
          <CardProjects
            img={project4} title={"sssaass"}  languages={"HTML/CSS"} git={"www.git.com"}   
          />


     
    </Container>
  )
}
const Container= styled.div` 
display:grid;
grid-template-columns: repeat(2,450px);
column-gap:5rem;
row-gap: 2.5rem;
justify-content: center;
@media(max-width:1000px){
  grid-template-columns: auto;
}
`;


export default Projects