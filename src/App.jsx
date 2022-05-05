import React from "react"

//

import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
} from "react-router-dom"

//

import "../src/App.css"

import AddMovie from "./Components/addMovie/addMovie.jsx"

//

import Header from "./Components/Global/header/header.jsx"

import Home from "./Components/Pages/home/home.jsx"
import Favorites from "./Components/Pages/favorites/favorites.jsx"
import Seen from "./Components/Pages/seen/seen.jsx"
import All from "./Components/Pages/all/all.jsx"
import Added from "./Components/Pages/added/added.jsx"

// import AddMovie from "./Components/addMovie/addMovie.jsx"

//

export default class TodoFlix extends React.Component {
  render() {
    return(
      <Router>
        <Header/>
        
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Todos" element={<All/>}/>
          <Route path="/Favoritos" element={<Favorites/>}></Route>
          <Route path="/JaVistos" element={<Seen/>}></Route>
          <Route path="/Adicionados" element={<Added/>}></Route>
        </Routes>
        
        <AddMovie/>
      </Router>
    )
  }
}
