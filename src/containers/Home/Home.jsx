import { computeHeadingLevel } from '@testing-library/react';
import React, { useEffect, useState } from 'react'
import { Button } from '../../components/Buttons';
import List from '../../components/List/List';
import Text from '../../components/Text';
import { filmAttributes } from '../../constants/constants';
import './styles.css';
// import MaterialButton from '@material-ui/core/Button';
import Switch from '@material-ui/core/Switch';
// import TextField from '@material-ui/core/TextField';
// import { useStyles } from './styles';

const HomeScreen = () => {

	const [users, setUsers] = useState([]);
	const [newFilms, setNewFilms] = useState([]);

	// const classes = useStyles()

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
	const bottomDiv = {
		width: 100,
		height: 100,
		backgroundColor: 'yellow'
	}

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
		{/* <MaterialButton variant="outlined">Hello World</MaterialButton> */}
		<Switch defaultChecked />
		{/* <TextField className={classes.textField} id="outlined-basic" label="Outlined" variant="outlined" />
		<div className={classes.bottomDiv}>
			hello world
		</div> */}
	</div>;
}

export default HomeScreen;

// const styles = {
// 	bottomDiv: {
// 		width: 100,
// 		height: 100,
// 		backgroundColor: 'red'
// 	}
	
// }