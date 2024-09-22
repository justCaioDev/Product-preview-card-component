import styled from "styled-components";

 const Container = styled.div `

    width: 100%;
    max-width: 600px;
    height: 450px;
    display: flex;
    align-items: center;
    border-radius: 8px;
    overflow: hidden;
    background-color: white;
    @media screen and (max-width: 600px) {
        flex-direction: column;
        height: fit-content;
        border-radius: 12px;
    }

`

export default Container;
