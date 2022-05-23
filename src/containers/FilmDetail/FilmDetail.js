import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { filmAttributes } from '../../constants/constants';
import '../FilmDetail/FilmDetail.css'

const FilmDetail = () => {

	// Менюшка
	const profileTabs = [
		{
			id: 0,
			text: 'Сюжет'
		},
		{
			id: 1,
			text: 'Трейлер'
		},
		{
			id: 2,
			text: 'Аудио'
		},
	]

	// Hook useState for film attr
	const [film, setFilm] = useState();

	// Hook useState for change tab
	const [currentTab, setCurrentTab] = useState(0);

	const currentTabStyle = (id) => {
		return { backgroundColor: id === currentTab ? '#02b875' : 'transparent', borderTopLeftRadius: 10, borderTopRightRadius: 10 }
	}

	const onTabClick = (id) => {
		setCurrentTab(id)
	}

	// url change id

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
			<div className="details-menu">
				{
					profileTabs.map((tab) => {
						return <div style={currentTabStyle(tab.id)} onClick={() => onTabClick(tab.id)} className="choice-style"><span>{tab.text}</span></div>;
					})
				}

			</div>
			<div className="details-more">
				<div>
					<p>{film.Plot}</p>
					<div><span>Информация</span></div>
					<table>
						<tr>
							<td><span>Рейтинг: </span></td>
							<td> {film.Year} </td>
						</tr>
						<tr>
							<td><span>Год выхода: </span></td>
							<td> {film.Country} </td>
						</tr>
						<tr>
							<td><span>Жанр: </span></td>
							<td> {film.Genre} </td>
						</tr>
						<tr>
							<td><span>Режисер: </span></td>
							<td> {film.Director} </td>
						</tr>
						<tr>
							<td><span>В ролях: </span></td>
							<td> {film.Actors} </td>
						</tr>
						<tr>
							<td><span>Длительность: </span></td>
							<td> {film.Runtime} </td>
						</tr>
						<tr>
							<td><span>Награды: </span></td>
							<td> {film.Awards} </td>
						</tr>
					</table>
				</div>
				{/* <p>{film.Plot}</p>
				<div><span>Информация</span></div>
				<div><span>Рейтинг: </span>{film.imdbRating}</div>
				<div><span>Год выхода: </span>{film.Year} </div>
				<div><span>Страна: </span>{film.Country}</div>
				<div><span>Жанр: </span>{film.Genre} </div>
				<div><span>Режисер: </span>{film.Director} </div>
				<div><span>В ролях: </span>{film.Actors} </div>
				<div><span>Длительность: </span>{film.Runtime} </div>
				<div><span>Награды: </span>{film.Awards}</div> */}
			</div>
		</div>
	</div>

	console.log("test")

}
{/* <h1>Film ID: {params.filmId} {film.Title}</h1> */ }
export default FilmDetail;