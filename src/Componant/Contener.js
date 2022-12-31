import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function ContainerFluidBreakpointExample() {
  return (
    <Container fluid="xxll"  > 
        <div className='section'>
           <h1 className='informed'>GET INFORMED</h1>
           <h2 className='inspired'>GET INSPIRED</h2>
           <p className='line'></p>
           <p className="peragraph">Stories Curated For You</p>

           <Button variant="danger" size="lg" >signup</Button>
          
        </div>
        

        
      
    </Container>
  );
}

export default ContainerFluidBreakpointExample;