import styled from 'styled-components';

export const Container=styled.div`
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
export const InputContainer= styled.div`
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
export const Input= styled.input`
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
export const Button= styled.button`
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
export const ErrorMessage=styled.div`
  margin-top: 10px;
`
export const Label=styled.label`
  color: var(--red);
  font-weight: 700;
  font-style: italic;
`