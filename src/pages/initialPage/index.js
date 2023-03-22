//Importando React
import React from "react";
//Importando Css
import "../initialPage/initialPage.css"
//Importando Components
import NavBar from "../../components/navBar/navBar";

function InitialPage({}){
    return(
        <div className="container">
            <NavBar/>
            <h1>Inicios da pagina</h1>
        </div>
    )
}
export default InitialPage