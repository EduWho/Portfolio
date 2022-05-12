import Perfil from "./components/Perfil";
import Contact from "./components/Contact";
import Buttons from "./components/Buttons";
import GlobalStyle from "./globalStyles";
import scrollreveal from "scrollreveal";
import { useEffect } from "react";


function App() {
  useEffect(()=>{
    const sr =scrollreveal({
      origin:'top',
      distance:'60px',
      duration:2000,
      reset:false,
    });
    sr.reveal(
      `
      #nav,
      #contact,
      #buttons,
      #project
      `,{
        opacity: 0,
        interval:300,
      }
    )
  },[])
  
  return (
   <>
   <GlobalStyle/>
    <Perfil/>
    <Contact/>
    <Buttons/>
   </>
  );
}

export default App;
