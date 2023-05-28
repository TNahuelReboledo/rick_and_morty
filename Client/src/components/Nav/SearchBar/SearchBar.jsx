import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar({onSearch}) {

	const [id,setId] = useState('');

	const handleChange = (e)=>{
		setId(e.target.value);
	}

	return (
		<div >
			<header className={style.searchBar}>
				<input className={style.introID} type="search" value={id} onChange={handleChange} placeholder="Introduzca el id..."/>
				<button onClick={()=>onSearch(id)} className={style.searchButton}>Search</button>
			</header>
		</div>
	);
};