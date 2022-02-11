import styled from 'styled-components';

 export const Container=styled.div`
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
 export const Header=styled.h3`
    font-size: 55px;
    margin-bottom: 5px;
    font-weight: 700;

    @media (max-width: 1140px) {
      font-size: 50px;
    }
`
 export const Text=styled.p`
    margin-bottom: 30px;
    width: 400px;
    color: var(--text);
    font-weight: 700;

    @media (max-width: 622px) {
        width: 100%;
    }
`