import Link from 'next/link';

export const Navigation = () => {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container">
                <Link href="/">
                    <a className="navbar-brand">Navbar</a>
                </Link>
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
                            <Link href="/">
                                <a className="nav-link">Home</a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/cats">
                                <a className="nav-link">Cats</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
