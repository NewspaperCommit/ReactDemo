import React from "react";
import { Container } from "reactstrap";

import Header from './header';
import Footer from './footer';



export default function Layout({ children }) {
  return (
    <>

   <Header/>
      <Container>

      {children}

      </Container>

      <Footer/>
    </>
  );
}