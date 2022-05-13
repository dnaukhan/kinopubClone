import React from "react";
import "./sidebar.css"
const libraryMenu = ["Фильмы", "Novinki", "Serial"]

const Sidebar = () => {
	return <div className="sidebar">
		<img src={require("../../assets/images/kinopub.png")} className="logo" />

		<ul>
			<h5>Biblioteka</h5>

			{libraryMenu.map(el =>
				<li>{el}</li>)}
		</ul>

	</div>
}

export default Sidebar;