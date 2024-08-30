import "./Hero.scss";

export default function Header() {
  return (
    <section className="hero">
      <img src="/images/IMG_0272.jpeg" className="hero__image" />
      <div className="hero__text">
        <h2 className="hero__headline">
          FULL-STACK
          <br /> DEVELOPER
        </h2>
        <div className="hero__bio">
          <p className="hero__paragraph">
            Hi there! I’m a Canadian Software Engineer with a passion for
            sustainability and a talent for problem-solving. I earned my B.Sc.
            in Mathematics from McGill University and recently graduated from
            BrainStation's Software Engineering Bootcamp. I’m committed to
            applying my skills to develop innovative, sustainable solutions that
            make a positive impact on the world. When I’m not coding, you can
            find me practicing yoga, dabbling in pottery, or connecting with
            nature. I look forward to connecting!
          </p>
          <button> View Projects </button>
        </div>
      </div>
    </section>
  );
}
