import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container=styled.div`
`
export const LinkShortedDiv= styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    margin-bottom: 10px;
    background: white;
    border-radius: 2px;

    @media (max-width: 700px) {
    flex-direction: column;
    height: auto;
    align-items: flex-start;
    }

`
export const Text= styled.p`
    width: 260px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

  @media (max-width: 700px) {
    width: 100%;
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid var(--text);
  }

`
export const Button= styled.button`
    width: 100px;
    height: 40px;
    border: 0;
    border-radius: 3px;
    color: white;
    font-weight: 700;
    background: var(--buttonBgColor);
    cursor: pointer;
    
    @media (max-width: 700px) {
    width: 100%;
    margin-top: 20px;
    
    
  }
  

`
export const ResultLink=styled(Link)`
    margin-right: 20px;
    color: var(--buttonBgColor);
    font-weight: 700;
    cursor: pointer;
`
export const Results= styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width:700px){
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`