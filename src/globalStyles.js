import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
    /*color*/ 
    --blue:#41baf6;
    --blue1:hsl(207,90%,61%)
    --blue-alt:hsl(207,90%,57%);
    --gradient-blue:hsla(207,91%,61%,1);
    --gradient-darkBlue:hsla(207,91%,61%,.2);
    --title-color:hsl(207,8%,92%);
    --body-color:hsl(207,100%,99%);
    --text-color-light:hsl(207, 8%, 75%);
    --text-color:hsl(207,12%,45%)
}
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family:'Poppins', sans-serif;
        font-size: .938rem;
        
       
    }

    html,body{
        overflow-x:hidden;
        margin:auto;
    }
`

export default GlobalStyle