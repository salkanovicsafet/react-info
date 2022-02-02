import logo from "../assets/images/react-icon-small.png";

export function Navbar() {
  return (
    <nav>
      <img alt="logo" src={logo} className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
