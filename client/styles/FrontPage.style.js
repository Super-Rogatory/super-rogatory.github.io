import styled from 'styled-components';

export const Container = styled.div`
    font-weight: 900;
    ${(props) => props.type !== 'mobile' ? `height: 100vh;` : `height: auto;`}
    width: 100%;
    background-color: rgba(41,45,62,1);
`;

export const MainSection = styled.div`
    max-width: 100%;
    transition: 0.45s ease-in-out;        
    ${(props) => props.type === 'mobile' && `    
        padding: 0 25px;
    `}
    ${(props) => props.status === "dim" && `
        filter: opacity(1) drop-shadow(0px 0px 1px #99a8e8)
            brightness(60%)
            blur(30px);
        pointer-events: none; 
    `}
`;

export const BodyContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    ${(props) => props.type !== 'mobile' ? `height: 70vh;` : `height: auto;`}
    ${(props) => props.type === 'mobile' && `
        display: flex;
        flex-direction: column;
        position: relative;
        top: 20vh;
        justify-content: flex-start;
        width: 100%;
        overflow: hidden;
        & h6 {
            margin-top: 0px;
            margin-bottom: 25px;
            font-size: 16px;
            font-weight: 400;
            color: #99a8e8;
        }
        & h1 {    
            margin-top: 0px;
            margin-bottom: 10px;
            font-size: 50px;                   
            font-weight: 800;
            white-space: nowrap;
        }
        & h2 {    
            margin-top: 0px;
            margin-bottom: 10px;
            font-size: 34px;                   
            font-weight: 800;
            white-space: nowrap;
        }        
        & p {
            margin-top: 20px;
            margin-bottom: 40px;
            font-size: 14px;
            line-height: 1.2rem;
            font-weight: 400;
            color: #D3D3D3;
        }

        @media only screen and (max-width: 465px) {
            & h6 {
                font-size: 14px;
            }
        
            & p {
                font-size: 0.5rem;
            }
        }
                  
        @media only screen and (max-width: 560px) {
            & p {
                font-size: 0.55rem;
            }
            & h1 {    
                font-size: 34px;                   

            }
            & h2 {    
                font-size: 20px;                   
            }              
        }       
    `
}

`
export const BodySectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    ${(props) => props.type !== 'mobile' ? `width: 65%;` : `width: 100%;`}
    height: 100%;
    justify-content: ${(props) => props.type !== 'mobile' ? `center;` : `flex-start;`}
    & span {
        color: #99a8e8;
    }    
    ${(props) => 
        props.type !== 'mobile' &&
    `
        & h6 {
            margin-top: 20px;
            margin-bottom: 0px;
            font-size: .8rem;
            font-weight: 400;
            color: #99a8e8;
        }
        & h1 {
            margin-top: 40px;
            margin-bottom: 0px;
            font-size: 2em;
            font-weight: 400;
        }
        & p {
            margin-top: 30px;
            margin-bottom: 20px;            
            font-size: 0.6em;
            max-width: 650px;
            height: 135px;
            line-height: 0.8rem;
            font-weight: 400;
            color: #D3D3D3;
            overflow: hidden;
        }
        
        @media only screen and (max-width: 1381px) {
            & h1 {
                font-size: 2rem;
            }
        }

        @media only screen and (max-width: 1176px) {
            & h6 {
                margin-top: 15px;
                margin-bottom: 0px;
                font-size: .7rem;
            }
            & h1 {
                margin-top: 35px;
                margin-bottom: 0px;
                font-size: 1.4rem;
            }
            & p {
                font-size: 0.6em;
                width: 100%;
                height: 135px;
            }      
        }
        @media only screen and (min-width: 1176px) and (max-height: 700px) {
            & h6 {
                margin-top: 15px;
                margin-bottom: 0px;
                font-size: 0.7rem;
                font-weight: 400;
                color: #99a8e8;
            }
            & h1 {
                margin-top: 35px;
                margin-bottom: 0px;
                font-size: 1.7rem;
                font-weight: 400;
            }
            & p {
                margin-top: 30px;
                font-size: 0.6em;
                width: 80%;
                height: 160px;
                line-height: 0.8rem;
                font-weight: 400;
                color: #D3D3D3;
            }        
        }

        @media only screen and (max-width: 1060px) {
            padding-left: 30px; 
        }

        @media only screen and (max-width: 870px) {
            & p {
                height: 160px;
            }  
        }
            
        @media only screen and (max-height: 550px) {
            overflow: hidden;
        }
           
    `
}
`

export const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    & img {
        filter: opacity(1) drop-shadow(-5px 9px 5px #D3D3D3) brightness(${(props) => props.dim ? 25 : 100}%) blur(${(props) => props.dim ? 10 : 0}px);
    }

    & img {
        width: 315px;
        height: 450px; 
    }

    @media only screen and (max-width: 1000px)   {
        & img {
            width: 237px;
            height: 338px;
        }
    }  

    @media only screen and (max-height: 570px) {
        & img {
            width: 100%;
            height: 75%;
        }
    }    
`