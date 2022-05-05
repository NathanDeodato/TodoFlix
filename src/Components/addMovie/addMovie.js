import styled from "styled-components"

//

export const MovieBox = styled.div `
    width: 55vw;
    height: 80vh;
    margin: 0 auto;
    margin-top: -1%;

    display: flex;

    border: solid 1px #808080;
    border-radius: 10px;
`

export const MovieMiniBox = styled.div `
    width: 100%;
    height: 20%;
    
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
`

export const MovieMiniBoxOne = styled.div `
    width: 50%;
    height: 95%;

    position: relative;
    top: -2%;
    left: 8%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const MovieMiniBoxTwo = styled.div `
    width: 30%;
    height: 40%;
    
    position: relative;
    top: -2%;
    left: 8%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

//

export const MovieTitleFunctionBox = styled.p `
    font-size: 1.7rem;
`

export const MovieLabel = styled.p `
    font-size: 0.9rem;
    font-weight: bold;
`

export const MovieNameBox = styled.div `
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const MovieName = styled.input `
    width: 90%;
    height: 6vh;

    color: #fff;
    background-color: #2C2C2C;
    border: none;
    border-radius: 4px;
    outline: none;
`

export const MovieDescriptionBox = styled.div `
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const MovieDescription = styled.input `
    width: 90%;
    height: 12vh;

    color: #fff;
    background-color: #2C2C2C;
    border: none;
    border-radius: 4px;
    outline: none;
`

export const MovieStatusBox = styled.div `    
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

export const MovieStatusMiniBox = styled.div `
    width: 50%;
    
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const MovieStatusTitle = styled.p `
    font-size: 0.9em;
    font-weight: bold;
`

export const MovieStatusSelect = styled.div `
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const MovieStatus = styled.img `
    width: 15%;
    height: 35%;

    border: 2px solid #d1d1d1;
    border-radius: 50%;

    &:hover {
        cursor: pointer;
    }
`

export const MovieStarsBox = styled.div `
    width: 100%;
    height: 25%;
`

export const MovieStarsTitle = styled.p `
    font-size: 0.9em;
    font-weight: bold;
`

export const MovieStars = styled.img `
    width: 10%;
    height: 30%;
`

//

export const MovieClose = styled.img `
    width: 12%;

    position: absolute;
    top: 15%;
    left: 165%;
`

export const MovieImageBox = styled.div `

`

export const MovieImage = styled.img `

`

export const MovieImageInput = styled.input `

`

//

export const MovieButtonCancel = styled.button `
    width: 18%;
    height: 7%;

    position: relative;
    top: 90%;
    left: -35%;

    font-size: 0.9em;
    font-weight: bold;

    color: #fff;
    background-color: #000;
    border: none;
    outline: none;

    &:hover {
        cursor: pointer;
    }
`

export const MovieButtonConfirme = styled.button `
    width: 18%;
    height: 7%;

    position: relative;
    top: 90%;
    left: -30%;

    font-size: 0.9em;
    font-weight: bold;

    color: #fff;
    background-color: #E71B27;
    border: none;
    border-radius: 4px;
    outline: none;

    &:hover {
        cursor: pointer;
    }
`
