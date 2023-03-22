//Importando dependencia React
import React from 'react';
//Importando componente como root principal
import InitialPage from './pages/initialPage';
//Importando ReactDom
import ReactDOM from 'react-dom/client';

 //eslint-disable-next-line
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <InitialPage/>
  </React.StrictMode>
);

