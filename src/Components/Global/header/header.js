import styled from "styled-components"

//

export const MiniHeader = styled.header `
    height: 15vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const MiniHeaderBoxOne = styled.div `
    width: 50vw;
    height: 100%;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const MiniHeaderBoxTwo = styled.div `
    width: 50vw;
    height: 100%;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const TitleBox = styled.div `
    position: absolute;
    top: 5%;
    left: 3%;
`

export const Title = styled.img `
    &:hover {
        cursor: pointer;
    }
`

export const Nav = styled.nav `
    width: 15vw;
    
    position: absolute;
    top: 3.8%;
    left: 11%;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Ul = styled.ul `
    width: 100%;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Li = styled.li `
    width: 3vw;
    margin-left: -2vw;
    
    list-style-type: none;

    &:hover {
        cursor: pointer;

        color: #E71B27;
        font-weight: bold;
    }
`

export const LiSelect = styled.div `
    position: relative;
    top: 0.2vh;
    
    color: #fff;
    background-color: #000;

    border: none;
    outline: none;

    &:hover {
        cursor: pointer;
    }
`

export const Option = styled.option `
    &:hover {
        cursor: pointer;
    }
`

//

export const AddMovieBox = styled.div `
    width: 15vw;
    height: 32%;
    
    position: relative;
    top: -2%;
    left: -2%;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const ButtonAddMovie = styled.button `
    width: 60%;
    height: 100%;

    color: #fff;
    font-size: 0.8rem;
    background-color: #E71B27;
    border: none;
    border-radius: 4px;
    outline: none;

    &:hover {
        cursor: pointer;
    }
`

//

export const SearchBox = styled.div `
    width: 30vw;
    height: 32%;
    
    position: relative;
    top: -2%;
    left: -8%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    background-color: #2C2C2C;
    border: none;
    border-radius: 4px;
    outline: none;
`

export const MiniSearch = styled.input `
    width: 85%;
    position: relative;
    left: 4%;
    
    color: #fff;
    background-color: #2C2C2C;
    border: none;
    outline: none;
`

export const SearchIcon = styled.img `
    position: relative;
    left: 2%;
`

//

export const ProfileBox = styled.div `
    position: relative;
    top: -2%;
    left: -5%;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const MiniProfile = styled.img `
    border-radius: 4px;

    &:hover {
        cursor: pointer;
    }
`

export const ProfileConfigButton = styled.img `
    width: 0.6vw;
    
    position: relative;
    left: 20%;

    &:hover {
        cursor: pointer;
    }
`
