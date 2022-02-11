import React, {useState, useEffect} from 'react';
import ReactLoading from "react-loading";
import styled from 'styled-components';
import {getLink} from '../api/request'
import UrlResults from './UrlResults';

const Container=styled.div`
  background-size: cover;
  background-color: var(--Dark-Violet);
  border-radius: 8px;
  width:100%;
  height: auto;
  padding: 30px;
  display: flex;
  flex-direction: column;
  top: -60px;
  position: relative;
  margin: 0 auto;
  
`
const InputContainer= styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    height: auto;
    background: url('/bg-shorten-mobile.svg') no-repeat;
    background-size: cover;
    background-color: var(--Dark-Violet);
  }
`
const Input= styled.input`
  width: 100%;
  height: 50px;
  margin: 0 10px 0 0;
  font-family: "Poppins", sans-serif;
  border: 1px solid black;
  border-radius: 8px;
  outline: none;
  padding: 0 20px 0 20px;
  
  @media (max-width: 700px) {
    margin: 0;
    height: 50px;
  }
 
  
`
const Button= styled.button`
margin: 0 0 0 10px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: black;
  background: var(--buttonBgColor);
  border: 1px solid black;
  border-radius: 8px;
  outline: none;
  padding: 0 20px 0 20px;
  height: 50px;
  cursor: pointer;

  @media (max-width: 700px) {
    margin: 15px 0 0 0;
    width: 100%;
    height: 50px;
    
  }
`
const ErrorMessage=styled.div`
  margin-top: 10px;
`
const Label=styled.label`
  color: var(--red);
  font-weight: 700;
  font-style: italic;
`

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
