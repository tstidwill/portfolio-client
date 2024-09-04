import "./Header.scss";

export default function Header() {
  return (
    <section className="header">
      <div>
        <h3 className="header__logo">TARA STIDWILL</h3>
      </div>
      <ul className="header__directory">
        <li className="header__listitem">
          {" "}
          <a href="#portfolio" className="header__link">
            Portfolio
          </a>
        </li>
        <li className="header__listitem">
          <a
            href="/Tara_Stidwill_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="header__link"
          >
            Resume
          </a>
        </li>
        <li className="header__listitem">Connect</li>
      </ul>
    </section>
  );
}
