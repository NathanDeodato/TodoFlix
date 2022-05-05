import React from "react"

//

import {
    MovieBox,
    MovieMiniBoxOne,
    MovieMiniBoxTwo,
    MovieTitleFunctionBox,
    MovieLabel,
    MovieNameBox,
    MovieName,
    MovieDescriptionBox,
    MovieDescription,
    MovieStatusBox,
    MovieStatusMiniBox,
    MovieStatusTitle,
    MovieStatusSelect,
    MovieStatus,
    MovieStarsBox,
    MovieStarsTitle,
    MovieStars,
    MovieClose,
    MovieImageBox,
    MovieImage,
    MovieImageInput,
    MovieButtonCancel,
    MovieButtonConfirme
} from "./addMovie"

//

import { 
    CloseIcon, 
    RadioFalse, 
    RadioTrue, 
    StarIcon
} from "../../assets"

//

export default class AddMovie extends React.Component {
    render() {
        return(
            <MovieBox>
                <MovieMiniBoxOne>
                    <MovieTitleFunctionBox>
                        Adicionar Filme
                    </MovieTitleFunctionBox>
                    <MovieNameBox>
                        <MovieLabel>Name</MovieLabel>
                        <MovieName/>
                    </MovieNameBox>
                    <MovieDescriptionBox>
                        <MovieLabel>Description</MovieLabel>
                        <MovieDescription/>
                    </MovieDescriptionBox>
                    <MovieStatusBox>
                        <MovieStatusTitle>
                            <MovieLabel>Status</MovieLabel>
                        </MovieStatusTitle>
                        <MovieStatusSelect>
                            <MovieStatusMiniBox>
                                <MovieStatus src={RadioFalse}/>
                                <MovieLabel>Já assisti</MovieLabel>
                            </MovieStatusMiniBox>
                            <MovieStatusMiniBox>
                                <MovieStatus src={RadioFalse}/>
                                <MovieLabel>Não assisti</MovieLabel>
                            </MovieStatusMiniBox>
                        </MovieStatusSelect>
                    </MovieStatusBox>
                    <MovieStarsBox>
                        <MovieStarsTitle>
                            Nota
                        </MovieStarsTitle>
                        <MovieStars src={StarIcon}/>
                        <MovieStars src={StarIcon}/>
                        <MovieStars src={StarIcon}/>
                        <MovieStars src={StarIcon}/>
                        <MovieStars src={StarIcon}/>
                    </MovieStarsBox>
                </MovieMiniBoxOne>
                <MovieMiniBoxTwo>
                    <MovieClose src={CloseIcon}/>
                    <MovieImageBox>
                        <MovieImage/>
                        <MovieImageInput/>
                    </MovieImageBox>
                </MovieMiniBoxTwo>
                <MovieButtonCancel>Cancelar</MovieButtonCancel>
                <MovieButtonConfirme>Confirmar</MovieButtonConfirme>
            </MovieBox>
        )
    }
}