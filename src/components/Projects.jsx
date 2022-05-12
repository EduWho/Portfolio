
import styled from 'styled-components'
import CardProjects from './CardProjects'
import project1 from '../assets/project1.png'
import project2 from '../assets/project2.png'
import project3 from '../assets/project3.png'
import project4 from '../assets/project4.png'




function Projects() {

  return (
    
    <Container id="project">
    
        
          <CardProjects
            img={project1} title={"Sunnyside"} languages={"HTML/CSS/Bootstrap"} git={"https://github.com/EduWho/Sunnyside.git"}   
          />
          <CardProjects
            img={project2} title={"MasterCook"} languages={"React/styledComponents"} git={"https://github.com/EduWho/MasterCook_page.git"}    
          />
          <CardProjects
            img={project3} title={"TodoList"}  languages={"React/CSS"} git={"https://github.com/EduWho/Todo_list.git"}   
          />
          <CardProjects
            img={project4} title={"Insure_Landing"}  languages={"HTML/CSS"} git={"https://github.com/EduWho/-Insure-landing-page.git"}   
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