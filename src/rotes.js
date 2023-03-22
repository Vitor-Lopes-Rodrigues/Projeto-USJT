import React, {useState} from "react";
import {Routes, Route, Navigate, useNavigate} from "react-router-dom";
import InitialPage from "./pages/initialPage"
export default function routes (){

    //Criando constantes para states
    // const [email, setEmail] = useState();
    // const [token, setToken] = useState();
    // const navigate = useNavigate();

    return(
      <div className="Routes">
        <Routes>
            <Route path="/" element={ <InitialPage/>} />
            {/*<Route path="/" element={ <Function/>} />*/}
            {/*<Route path="/" element={ <Function/>} />*/}
            {/*<Route path="/" element={ <Function/>} />*/}
        </Routes>
      </div>

    );
}
