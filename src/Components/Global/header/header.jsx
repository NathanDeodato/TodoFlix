import React from "react"

//

import { Link } from "react-router-dom"

//

import { 
    TodoFlix,
    SearchFilter,
    ProfileIcon,
    ProfileVetor,
} from "../../../assets"

//

import { 
    MiniHeader, 
    MiniHeaderBoxOne,
    MiniHeaderBoxTwo,
} from "./header"

export default class Header extends React.Component {
    render() {
        return (
            <MiniHeader>
                <MiniHeaderBoxOne>
                    <TitleTodo/>
                    <SelectClass/>        
                </MiniHeaderBoxOne>
                <MiniHeaderBoxTwo>
                    <AddMovieButton/>
                    <Search/>
                    <Profile/>    
                </MiniHeaderBoxTwo>
            </MiniHeader>
        )
    }
}

//

import { 
    TitleBox, 
    Title 
} from "./header"

class TitleTodo extends React.Component {
    render() {
        return(
            <TitleBox>
                <Title src={TodoFlix}/>
            </TitleBox>
        )
    }
}

//

import { 
    Nav,
    Ul,
    Li,
    LiSelect,
    Option
} from "./header"

class SelectClass extends React.Component {
    render() {
        return(
            <Nav>
                <Ul>
                    <LiSelect name="Categoria">
                        <Link to="/">Início</Link>
                        <Link to="/Todos">Todos</Link>
                        <Link to="/Favoritos">Favoritos</Link>
                        <Link to="/JaVistos">Já vistos</Link>
                        <Link to="/Adicionados">Adicionados</Link>
                    </LiSelect>
                </Ul>
            </Nav>
        )
    }
}

//

import { 
    SearchBox,
    SearchIcon,
    MiniSearch 
} from "./header"

class Search extends React.Component {
    render() {
        return(
            <SearchBox>
                <SearchIcon src={SearchFilter}/>
                <MiniSearch placeholder="Pesquisar">
                </MiniSearch>
            </SearchBox>
        )
    }
}

//

import { 
    ProfileBox, 
    MiniProfile,
    ProfileConfigButton
} from "./header"

class Profile extends React.Component {
    render() {
        return(
            <ProfileBox>
                <MiniProfile src={ProfileIcon}/>
                <ProfileConfigButton src={ProfileVetor}></ProfileConfigButton>
            </ProfileBox>
        )
    }
}

//

import { 
    AddMovieBox,
    ButtonAddMovie
} from "./header"

class AddMovieButton extends React.Component {
    render() {
        return(
            <AddMovieBox>
                <ButtonAddMovie>
                    Adicionar filme
                </ButtonAddMovie>
            </AddMovieBox>
            
        )
    }
}
