import Hero from "./Hero";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
	const detailUrl = `/movies/${movie.id}`;
	console.log(movie.release_date);

	function findReleaseYear() {
		if (movie.release_date) {
			return movie.release_date.slice(0, 4);
		} else {
			return "Release date not listed";
		}
	}

	function defaultPoster() {
		return "https://images.unsplash.com/photo-1616530940355-351fabd9524b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80";
	}

	function variablePoster() {
		return `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	}

	function posterUrl(posterPath) {
		if (typeof posterPath === "string") {
			return variablePoster();
		} else {
			return defaultPoster();
		}
	}

	return (
		<div className="col-lg-3 col-md-3 col-2 my-4">
			<div className="card h-100">
				<img
					src={posterUrl(movie.poster_path)}
					className="card-img-top"
					alt={movie.original_title}
					id="posterFormat"
				/>
				<div className="card-body d-flex flex-column justify-content-end">
					<h5 className="card-title">{movie.original_title}</h5>
					<p className="card-text">{findReleaseYear()}</p>
					<Link to={detailUrl} className="btn btn-primary">
						Show details
					</Link>
				</div>
			</div>
		</div>
	);
};

const SearchView = ({ keyword, searchResults }) => {
	let title = `You are searching for ${keyword}`;

	const resultsHtml = searchResults.map((obj, i) => {
		return <MovieCard movie={obj} key={i} />;
	});

	return (
		<>
			<Hero text={title} />
			{resultsHtml && (
				<div className="container">
					<div className="row">{resultsHtml}</div>
				</div>
			)}{" "}
			<h2 className="p-5">
				{"Sorry, we couldn't find anything for " + keyword}
			</h2>
		</>
	);
};

export default SearchView;
