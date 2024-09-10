import NewLeaf from "../NewLeaf/NewLeaf";
import "./Portfolio.scss";

export default function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__welcome welcome">
        <h2 className="welcome__header">My Portfolio</h2>
        <h5>
          Welcome to my portfolio. Here you'll find a selection of my work.
          Explore my projects to learn more about what I do.
        </h5>
      </div>
      <div className="portfolio__projects projects">
        <section className="projects__card">
          <NewLeaf />
          <h4 className="projects__title">New Leaf</h4>
          <p className="projects__description">
            {" "}
            A web app that allows users to enter an area code and find nearby
            community gardens, thrift stores, and zero waste groceries. It
            features category-based filtering and uses Google Maps for location
            services, all built with React, Express, and MySQL.
          </p>
        </section>
      </div>
    </section>
  );
}
