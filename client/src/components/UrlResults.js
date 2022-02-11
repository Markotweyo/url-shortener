import React from 'react';
import {Container, LinkShortedDiv, Text, Results, ResultLink, Button  } from '../styles/UrlResultStyle'




const UrlResults = ({links}) => {
    
    const handleCopy= async (e)=>{
            await navigator.clipboard.writeText(e.target.previousSibling.textContent)
            e.target.textContent = "Copied to Clipboard";
            e.target.style.background = "var(--bgDarkViolet)";
            setTimeout(() => {
              e.target.textContent = "Copy";
              e.target.style.background = "var(--buttonBgColor)";
            }, 2000);
           
    }

  return (
    <Container>
        {links?.map(link => (
        <LinkShortedDiv key={link.result.code}>
          <Text>{link.result.original_link}</Text>
          <Results>
            <ResultLink to={link.result.full_short_link3} target="_blank">{link.result.full_short_link3}</ResultLink>
            <Button onClick={(e) => handleCopy(e)} type="button">Copy</Button>
          </Results>
        </LinkShortedDiv>
      ))}
           
    </Container>
  );
};

export default UrlResults;

