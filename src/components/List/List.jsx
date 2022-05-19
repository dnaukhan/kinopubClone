import React from "react";
import { Link } from "react-router-dom";
import './style.css';


const List = (props) => {
	// console.log('list')
	return <div>
		<span>{props.title}</span>
		<div className="main">
			{props.newFilms.map((film) => {
				console.log(film.imdbID)
				return <div className="profilePhoto">
					<Link to={`/filmDetails/${film.imdbID}`}>
						<img src={film.Images[0]} />
					</Link>
				</div>
			})}</div>
	</div>
}

export default List;