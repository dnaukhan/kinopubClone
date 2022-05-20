import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filmAttributes } from '../../constants/constants';
import '../FilmDetail/FilmDetail.css'

const FilmDetail = () => {

	const [film, setFilm] = useState();




	const params = useParams()
	// console.log("Film Detail")

	useEffect(() => {
		const filmById = filmAttributes.filter(movie => movie.imdbID === params.filmId)

		setFilm(filmById[0])

		console.log("Film Detail", filmById)
	}, [])

	if (!film) {
		return <h1>Film not found</h1>
	}

	return <div className="main-section">
		<div className="poster-section">
			<img src={film.Images[0]} className="poster-image" />
		</div>
		<div className="details-section">

		</div>
	</div>

	console.log("test")

}
{/* <h1>Film ID: {params.filmId} {film.Title}</h1> */ }
export default FilmDetail;