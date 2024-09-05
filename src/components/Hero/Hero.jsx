import "./Hero.scss";
import TypedText from "../TypedText/TypedText";

export default function Header() {
  return (
    <section className="hero">
      <img src="/images/IMG_0272.jpeg" className="hero__image" />
      <div className="hero__text">
        <div className="hero__title">
          <h2 className="hero__subheader">climate focused</h2>
          <TypedText
            strings={["FULL-STACK DEVELOPER"]}
            className="typed-header"
          />
        </div>
        <div className="hero__bio">
          <p className="hero__paragraph">
            Hi there! <br />
            I’m a Canadian Software Engineer with a passion for sustainability
            and a talent for problem-solving. I earned my B.Sc. in Mathematics
            from McGill University and recently graduated from BrainStation's
            Software Engineering Bootcamp. I’m committed to applying my skills
            to develop innovative, sustainable solutions that make a positive
            impact on the world. When I’m not coding, you can find me practicing
            yoga, dabbling in pottery, or connecting with nature. I look forward
            to connecting!
          </p>
          <button> View Projects </button>
        </div>
      </div>
    </section>
  );
}
