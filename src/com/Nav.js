

const Nav = ({ setCategory }) => {

    const cursor = {
        cursor: "pointer"
    }
    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary fw-bold text-primary ">
                <div className="container-fluid">

                    <a className="navbar-brand" href="#"><span className="badge bg-danger text-
                         dark fs-2">NewsAPI</span></a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-
                        bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-
                        expanded="false" aria-label="Toggle navigation">

                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul style={cursor} className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" onClick={() =>
                                    setCategory("business")}>Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() =>
                                    setCategory("entertainment")}>Entertainment</a>

                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() =>
                                    setCategory("general")}>General</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setCategory("health")}>Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setCategory("science")}>Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => setCategory("sports")}>Sports</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() =>
                                    setCategory("technology")}>Technology</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
export default Nav;