export default function Home() {
  return (
    <nav className="sticky top-0 z-40 w-full bg-grey" role="navigation">
      <div className="navbar-header page-scroll">
        <button
          type="button"
          className="navbar-toggle"
          data-toggle="collapse"
          data-target="#bs-example-navbar-collapse-1"
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand page-scroll" href="#home">
          Andreas Hultgren
        </a>
      </div>
      <div
        className="collapse navbar-collapse"
        id="bs-example-navbar-collapse-1"
      >
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a className="page-scroll" href="#empathy">
              What
            </a>
          </li>
          <li>
            <a className="page-scroll" href="#how">
              How
            </a>
          </li>
          <li>
            <a className="page-scroll" href="#who">
              Who
            </a>
          </li>
          <li>
            <a className="page-scroll" href="#money">
              Donate
            </a>
          </li>
          <li>
            <a className="page-scroll" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a className="page-scroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
