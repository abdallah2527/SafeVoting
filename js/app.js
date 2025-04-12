const { HashRouter, Route, Switch } = ReactRouterDOM;

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top">
            <div className="container">
                <a className="navbar-brand" href="#">Safe Voting</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Create Poll</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Schedule Meeting</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#/login">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="btn btn-primary ms-2" href="#/signup">Sign up</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function Home() {
    return (
        <main className="hero-section">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <h1 className="hero-title">Create a poll<br />in seconds</h1>
                        <p className="hero-subtitle">
                            Want to ask your friends where to go friday night or arrange a meeting
                            with co-workers? Create a poll - and get answers in no time.
                        </p>
                        <a href="#" className="btn btn-primary create-poll-btn">Create a poll</a>
                        <p className="no-signup-text">No signup required</p>
                    </div>
                    <div className="col-lg-6">
                        <div className="text-center">
                            <img src="images/voting-illustration.svg" alt="Voting Illustration" className="hero-image" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

function App() {
    return (
        <HashRouter>
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                </Switch>
            </div>
        </HashRouter>
    );
}

ReactDOM.render(<App />, document.getElementById('root')); 