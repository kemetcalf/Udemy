import Hero from "./Hero";
import { Link } from "react-router-dom";
import { useRef } from "react";

// API key 538c0bcfa5b7c4e7d4ff31b31e5e7877

// TODO: HANDLER FOR "NO SEARCH RESULTS"

const MovieCard = ({ movie }) => {
	const detailUrl = `/movies/${movie.id}`;
	console.log(movie);
	const releaseYear = movie.release_date.slice(0, 4);
	// TODO: change back to variable
	// const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
	// TODO:if else statement conditional regarding null, undef, broken, and correct posterUrl
	const posterUrl =
		"https://image.tmdb.org/t/p/w500/vkXIykA6g8y2nzxKTNCHQZ1NvON.jpg";

	return (
		<div className="col-lg-3 col-md-3 col-2 my-4">
			<div className="card h-100">
				<img
					src={posterUrl}
					className="card-img-top"
					alt={movie.original_title}
				/>
				<div className="card-body d-flex flex-column">
					<h5 className="card-title">{movie.original_title}</h5>
					<p className="card-text">{releaseYear}</p>
					<Link to={detailUrl} className="btn btn-primary align-items-end">
						Show details
					</Link>
				</div>
			</div>
		</div>
	);
};

const SearchView = ({ keyword, searchResults }) => {
	const title = `You are searching for ${keyword}`;

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
			)}
		</>
	);
};

export default SearchView;
