import React, {useState, useEffect} from 'react';
import ReactLoading from "react-loading";
import {getLink} from '../api/request'
import UrlResults from './UrlResults';
import {Container, InputContainer, Input, Button, ErrorMessage, Label} from '../styles/InputFormStyle'



const InputForm = () => {
  const [longUrl, setLongUrl] = useState('');
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [existError, setExisterror] = useState(false);
  
  
  useEffect(() => {
    const storagedLinks = localStorage.getItem('@shrtco:links');

    if (storagedLinks) {
      setLinks(JSON.parse(storagedLinks));
      return;
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('@shrtco:links', JSON.stringify(links));
  }, [links]);


  const handleShortLink = async (e) => {
    e.preventDefault();
    if (!longUrl) {
      setErrorMessage("Please add a link");
      setExisterror(true);

      return;
    }
    
    try {
      setLoading(true);
      let validNewLink = longUrl;
      let verifyLink = validNewLink.substring(0, 8);

      if (verifyLink === "https://") {
        validNewLink = validNewLink.substr(8);
      }

      verifyLink = verifyLink.substr(0, 7);

      if (verifyLink === "http://") {
        validNewLink = validNewLink.substr(7);
      }

      const response = await getLink( validNewLink);
      const linkData = response.data;
      setLinks([...links, linkData]);
      setLoading(false);
      setExisterror(false);
      
      
      
    } catch (error) {
      setLoading(false);
      setExisterror(true);
      setErrorMessage("Invalid URL or rate limit reached. Try again later.");

      console.log(error);
      return;
      
    }
    
  };
    



  return (
    <>
    <Container>
      <InputContainer>
      <Input type="text" placeholder="Enter Url" required value={longUrl} onChange={(e)=>setLongUrl(e.target.value)} />
      <Button onClick={(e)=>handleShortLink(e)}>{ loading ? (
            <ReactLoading type={"bubbles"} width={50} height={50} />
          ) : "Shorten Link!" }</Button>
      </InputContainer>
      </Container>
      {existError && (
          <ErrorMessage>
            <Label>{errorMessage}</Label>
          </ErrorMessage>
        )}
    <UrlResults links={links}/>
    </>
  


  
  );
};

export default InputForm;
