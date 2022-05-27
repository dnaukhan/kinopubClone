import { Box, Tab, Tabs, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FilmInfo from "../../components/FilmInfo/filmInfo";
import { filmAttributes } from '../../constants/constants';
import '../FilmDetail/FilmDetail.css'

function TabPanel(props) {
	const { children, value, index, ...other } = props;
  
	return (
	  <div
		role="tabpanel"
		hidden={value !== index}
		id={`simple-tabpanel-${index}`}
		aria-labelledby={`simple-tab-${index}`}
		{...other}
	  >
		{value === index && (
		  <Box sx={{ p: 3 }}>
			<Typography>{children}</Typography>
		  </Box>
		)}
	  </div>
	);
  }
  
  function a11yProps(index) {
	return {
	  id: `simple-tab-${index}`,
	  'aria-controls': `simple-tabpanel-${index}`,
	};
  }

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
	const [value, setValue] = useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	  };

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
			<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
				<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
					<Tab label="Item One" {...a11yProps(0)} />
					<Tab label="Item Two" {...a11yProps(1)} />
					<Tab label="Item Three" {...a11yProps(2)} />
				</Tabs>
			</Box>
			<TabPanel className="details-more" value={value} index={0}>
				<FilmInfo film={film} />
			</TabPanel>
			<TabPanel value={value} index={1}>
				trailer
			</TabPanel>
			<TabPanel value={value} index={2}>
				audio
			</TabPanel>
		</div>
	</div>
}

export default FilmDetail;