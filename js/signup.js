function Signup() {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle signup logic here
    };

    return (
        <div className="auth-page">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="auth-form-container">
                            <h2 className="text-center mb-4">Create an account</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Full name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="name"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="password"
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="confirmPassword"
                                        required
                                    />
                                </div>
                                <div className="mb-3 form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="terms"
                                        required
                                    />
                                    <label className="form-check-label" htmlFor="terms">
                                        I agree to the Terms and Privacy Policy
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary w-100">
                                    Sign up
                                </button>
                            </form>
                            <p className="text-center mt-3">
                                Already have an account? <a href="#/login">Sign in</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 