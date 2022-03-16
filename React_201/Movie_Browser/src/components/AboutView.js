import Hero from "./Hero";

const AboutView = () => {
  return (
    <>
      <Hero text="About Us" />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              I think it will be best for her to go to bed tired out physically,
              so I shall take her for a long walk by the cliffs to Robin Hood's
              Bay and back. She ought not to have much inclination for
              sleep-walking then. Same day, 11 o'clock p. m.--Oh, but I am
              tired! If it were not that I had made my diary a duty I should not
              open it to-night. We had a lovely walk. Lucy, after a while, was
              in gay spirits, owing, I think, to some dear cows who came nosing
              towards us in a field close to the lighthouse, and frightened the
              wits out of us.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutView;
