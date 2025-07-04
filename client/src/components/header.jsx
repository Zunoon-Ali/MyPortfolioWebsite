// Header.jsx
function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light  sticky-top shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#hero">
          <img src="/portfolio.png" className="logo" alt="Zunoon Ali Logo" />
        </a>

        <button
          className="navbar-toggler text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" style={{filter: 'invert(1)'}}></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-4">
            <li className="nav-item">
              <a className="nav-link text-white" href="#hero">Intro</a>
            </li>

            {/* DROPDOWN */}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle text-white" href="#about" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About Me
              </a>
              <ul
                className="dropdown-menu my-dropdown"
                style={{ backgroundColor: '#333232de' }}
                aria-labelledby="navbarDropdown"
              >
                <li><a className="dropdown-item text-light" href="#education">Education</a></li>
                <li><a className="dropdown-item text-light" href="#skills">Skills</a></li>
                <li><a className="dropdown-item text-light" href="#projects">Projects</a></li>
                <li><a className="dropdown-item text-light" href="#goals">Goals</a></li>
              </ul>

            </li>

            <li className="nav-item">
              <a className="nav-link text-white" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
}

export default Header;
