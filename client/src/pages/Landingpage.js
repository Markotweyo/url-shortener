import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import styled from 'styled-components';
import GlobalStyles from '../styles/GlobalStyles';
import Navbar from '../components/Navbar';
import InputForm from '../components/InputForm';
import UrlResults from '../components/UrlResults';
import TopSection from '../components/TopSection';


const Container=styled.div``




const Landingpage = () => {
  return (
  
    <Container>
     <Router>
          <GlobalStyles/>
          <Navbar/>
          <TopSection/>
          <InputForm/>
          <UrlResults/>
      </Router>
    </Container>
  );
};

export default Landingpage;
