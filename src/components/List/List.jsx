import React from "react";
import './style.css';

const List = (props) => {
	console.log('list')
	return <div>
		<span>{props.title}</span>
		<div className="main">
			{props.newFilms.map((film) => {
				return <div className="profilePhoto"><img src={film.Images[0]} /></div>

			})}</div>
	</div>
}

export default List;