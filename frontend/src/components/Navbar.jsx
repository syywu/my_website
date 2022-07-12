import banner from "../../img/banner.jpeg";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <img src={banner} alt="banner" width={1000} length="500" />
      <div className="links">
        <a href="/">Home</a>
        <a href="/about">About Me</a>
        <a href="/cv">CV</a>
      </div>
    </nav>
  );
};

export default NavBar;
