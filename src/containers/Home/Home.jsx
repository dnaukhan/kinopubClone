import React, { useEffect, useState } from 'react'
import { Button } from '../../components/Buttons';
import List from '../../components/List/List';
import Text from '../../components/Text';
import { filmAttributes } from '../../constants/constants';
import './styles.css';
igt
const HomeScreen = () => {

	const [users, setUsers] = useState([]);
	const [newFilms, setNewFilms] = useState([]);

	// const fetchData = async () => {
	// 	fetch('https://randomuser.me/api?results=20')
	// 		.then((res) => res.json())
	// 		.then(data => {
	// 			setUsers(set)
	// 		})
	// 	// console.log('fetch result', result);
	// }

	const drama = newFilms.filter(movie => movie.Genre.toLowerCase().includes('drama'))
	const fantasy = newFilms.filter(movie => movie.Genre.toLowerCase().includes('fantasy'))

	const fetchData = async () => {
		fetch('https://randomuser.me/api?results=20')
			.then((res) => res.json())
			.then(data => {
				setNewFilms(filmAttributes)
			})
	}

	useEffect(() => {
		fetchData();
	}, [])

	return <div className='home'>
		<List newFilms={newFilms} title='Популярные фильмы' />
		<List newFilms={drama} title='Драма' />
		<List newFilms={fantasy} title='Фантастика' />

	</div>;
}

export default HomeScreen;