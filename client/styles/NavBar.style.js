import styled from 'styled-components';

export const FullNavBar = styled.div`
    display: flex;
    color: #616b93;
    width: 95%;
    ${(props) => props.type !== 'mobile' ? `height: 15vh;` : `min-height: 80px;`}
    margin: auto;
    justify-content: space-between;
    align-items: center;
    @media only screen and (max-width: 768px) {
        margin: 0px;
        padding: 10px 0px;
    }
`;

export const NavBarContainer = styled.div`
    width: 100%;
`;

export const ClickablePhotoOfMe = styled.div`
    width: 100px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & img {
        width: 55px;
        height: 55px;
        max-height: 10vh;
        filter: opacity(1) drop-shadow(0px 0px 2px #99a8e8); 
    } 
    & img:hover {
        transform: scale(1.1);
    }
    @media only screen and (max-width: 768px) {
        & img {
            filter: opacity(1) drop-shadow(0px 0px 3px #99a8e8) invert(67%) sepia(15%) saturate(3715%) hue-rotate(197deg) brightness(109%) contrast(82%);
        }
    }
    @media only screen and (max-height: 550px) {        
        & img {
            width: 100%;
            height: 100%; 
            min-width: 50px;
            min-height: 50px;      
        } 
    }
    @media only screen and (min-height: 1050px) {        
        & img {
            width: 65px;
            height: 65px;            
        } 
    }    

`

export const ClickableMenu = styled.div`
    & ul {   
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 600px;
        margin: 0;
        padding: 0;
        font-size: 15px;
        font-weight: 500;
        list-style: none;
        color: aliceblue;
    }
    & span {
        color: #99a8e8;
    }   

    & li:hover {
        color: #99a8e8;
        transition: 0.5s;
    }
    & a {
        text-decoration: none;
        color: inherit;
        margin: 0px;
        padding: 0px;
    }
`

export const Button = styled.button`
    border: 2px solid #99a8e8;
    border-radius: 8px;
    text-align: center;
    color: #99a8e8;
    background-color: rgba(41,45,62,255);
    font-weight: 800;
    width: ${(props) => props.size === "small" ? 100 : 200}px;
    min-height: 50px;
    cursor: pointer;
    &:hover {
        background-color: rgba(153,168,232,0.1);
        transition: 0.5s;
    }
    & span {
        z-index: 1;
    }
`