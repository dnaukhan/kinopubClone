import React from 'react';
import '../FilmInfo/filmInfo.css'

const FilmInfo = (props) => {

	const { film } = props

	return <div>

		<p>{film.Plot}</p>
		<div><span>Информация</span></div>
		<table>
			<tr>
				<td><span>Рейтинг: </span></td>
				<td> {film.imdbRating} </td>
			</tr>
			<tr>
				<td><span>Год выхода: </span></td>
				<td> {film.Year} </td>
			</tr>
			<tr>
				<td><span>Страна: </span></td>
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

	// 	<div>
	// 	<p>{film.Plot}</p>
	// 	<div><span>Информация</span></div>
	// 	<table>
	// 		<tr>
	// 			<td><span>Рейтинг: </span></td>
	// 			<td> {film.Year} </td>
	// 		</tr>
	// 		<tr>
	// 			<td><span>Год выхода: </span></td>
	// 			<td> {film.Country} </td>
	// 		</tr>
	// 		<tr>
	// 			<td><span>Жанр: </span></td>
	// 			<td> {film.Genre} </td>
	// 		</tr>
	// 		<tr>
	// 			<td><span>Режисер: </span></td>
	// 			<td> {film.Director} </td>
	// 		</tr>
	// 		<tr>
	// 			<td><span>В ролях: </span></td>
	// 			<td> {film.Actors} </td>
	// 		</tr>
	// 		<tr>
	// 			<td><span>Длительность: </span></td>
	// 			<td> {film.Runtime} </td>
	// 		</tr>
	// 		<tr>
	// 			<td><span>Награды: </span></td>
	// 			<td> {film.Awards} </td>
	// 		</tr>
	// 	</table>
	// </div>
	/* <p>{film.Plot}</p>
	<div><span>Информация</span></div>
	<div><span>Рейтинг: </span>{film.imdbRating}</div>
	<div><span>Год выхода: </span>{film.Year} </div>
	<div><span>Страна: </span>{film.Country}</div>
	<div><span>Жанр: </span>{film.Genre} </div>
	<div><span>Режисер: </span>{film.Director} </div>
	<div><span>В ролях: </span>{film.Actors} </div>
	<div><span>Длительность: </span>{film.Runtime} </div>
	<div><span>Награды: </span>{film.Awards}</div> */

}
export default FilmInfo
