import Hero from "./Hero";

const AboutView = () => {
	return (
		<>
			<Hero text="About Us" />
			<p className="text-center p-5">
				This here movie browser is powered by React and styled with Bootstrap,
				with data provided by The Movie Database's API at&nbsp;
				<a href="www.themoviedb.org">www.themoviedb.org</a>
			</p>
		</>
	);
};

export default AboutView;
