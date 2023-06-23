import { Link } from "react-router-dom";

const Signup = () => {
    const onSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title">Sign Up For Free</h1>
                    <input type="email" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <input type="password" placeholder="Password Confirmation" />
                    <button type="submit" className="btn btn-block">
                        Signup
                    </button>
                    <p className="message">
                        Already Registered?{" "}
                        <Link to="/login">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Signup;
