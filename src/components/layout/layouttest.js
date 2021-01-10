import React from "react";
import { Container } from "reactstrap";

import Header from './header';
import Footer from './footer';



export default function Layouttest({ children }) {
  return (
    <>

   <Header/>
      <Container>

      {children}

      </Container>
      <div>Footer</div>
     
    </>
  );
}