import "./Header.scss";

export default function Header() {
  return (
    <section className="header">
      <div>
        <h3 className="header__logo">TARA STIDWILL</h3>
      </div>
      <ul className="header__directory">
        <li className="header__listitem">Projects</li>
        <li className="header__listitem">Resume</li>
        <li className="header__listitem">Connect</li>
      </ul>
    </section>
  );
}
