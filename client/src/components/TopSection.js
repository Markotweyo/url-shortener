import React from 'react'

import styled from 'styled-components';

 const Container=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 500px;
    width: 600px;
    
    
    @media (max-width: 1140px) {
        width: 500px;
    }
    @media (max-width: 950px) {  
    text-align: center;
    width: 100%;
    align-items: center;
}

 `
 const Header=styled.h3`
    font-size: 55px;
    margin-bottom: 5px;
    font-weight: 700;

    @media (max-width: 1140px) {
      font-size: 50px;
    }
`
 const Text=styled.p`
    margin-bottom: 30px;
    width: 400px;
    color: var(--text);
    font-weight: 300;

    @media (max-width: 622px) {
        width: 100%;
    }
`

const TopSection = () => {
  return (
    <Container>
        <Header>Get Shorter URL Links Instantly</Header>
        <Text>
        Build your customised shorter url links  
        and copy them into your social media profiles.
        </Text>
    </Container>
  )
}

export default TopSection