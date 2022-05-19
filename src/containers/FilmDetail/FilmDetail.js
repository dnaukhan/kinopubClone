import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filmAttributes } from '../../constants/constants';

const FilmDetail = () => {

	const [film, setFilm] = useState();




	const params = useParams()
	// console.log("Film Detail")

	useEffect(() => {
		const filmById = filmAttributes.filter(movie => movie.imdbID === params.filmId)

		setFilm(filmById[0])

		console.log("Film Detail", filmById)
	}, [])


	return <h1>Film ID: {params.filmId} {film.Title} {film.}</h1>

}

export default FilmDetail;