import Hero from "./Hero";

const Home = () => {
	return (
		<>
			<Hero text="Let's watch a movie!" />
			<div className="container">
				<div className="row">
					<div className="col-lg-8 offset-lg-2 my-5">
						<p className="lead">
							Start typing a title into the search bar above to get started...
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
