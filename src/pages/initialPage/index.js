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
        </div>
    )
}
export default InitialPage