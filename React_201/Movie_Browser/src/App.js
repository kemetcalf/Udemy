import "./App.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import { Switch, Route } from "react-router-dom";

function App() {
	const [searchResults, setSearchResults] = useState([]);
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		console.log(searchText, "is the search text");
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=538c0bcfa5b7c4e7d4ff31b31e5e7877&language=en-US&query=${searchText}&page=1&include_adult=false`
		)
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	}, [searchText]);

	return (
		<div>
			<Navbar searchText={searchText} setSearchText={setSearchText} />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/about" component={AboutView} />
				<Route path="/search">
					<SearchView keyword={searchText} searchResults={searchResults} />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
