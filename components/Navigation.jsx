export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">
                    Navbar
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">
                                Home
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/cats">
                                Cats
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
