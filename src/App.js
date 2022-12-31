// import React from 'react';
// import jss
import NavScrollExample from './Componant/Navbar.js';
import ContainerFluidBreakpointExample from './Componant/Contener.js';
import ColorSchemesExample from './Componant/middleNavbar.js';
import BasicExample from './Componant/Card.js';

// import css
import  "./Componant/Contener.css"
import  "./Componant/Navbar.css"
// import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
     <NavScrollExample  />
     <ContainerFluidBreakpointExample />
     <ColorSchemesExample />
     <BasicExample />

    </div>
  );
}

export default App;
