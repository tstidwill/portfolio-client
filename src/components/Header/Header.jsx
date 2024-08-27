import "./Header.scss";

export default function Header() {
  return (
    <section className="header">
      <div>
        <h3 className="header__logo">TARA STIDWILL</h3>
      </div>
      <ul className="header__directory">
        <li>Projects</li>
        <li>Resume</li>
        <li>Connect</li>
      </ul>
    </section>
  );
}
