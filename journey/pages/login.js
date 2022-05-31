import { server } from "../config";
import loginStyles from "../styles/Login.module.css";

export default function Login() {
    return (
        <div className="row">
            <div className="col">
                <div className={loginStyles.card}>
                    <h4 className="titlu">Log in</h4>
                    <form>
                        <div className="form-outline mb-4">
                            <input
                                type="email"
                                id="form2Example1"
                                className="form-control"
                                placeholder="email"
                            />
                        </div>

                        <div className="form-outline mb-4">
                            <input
                                type="password"
                                id="form2Example2"
                                className="form-control"
                                placeholder="password"
                            />
                        </div>

                        <div className="row mb-4">
                            <div className="col d-flex justify-content-center">
                                <a href="#!">Forgot password?</a>
                            </div>
                        </div>

                        <button
                            type="button"
                            className="btn btn-primary btn-block"
                        >
                            Sign in
                        </button>
                    </form>
                </div>
            </div>

            <div className="col">
                <div className={loginStyles.card}>
                <h4 className="titlu">Register</h4>
                    <form>
                        <div className="form-outline mb-4">
                            <input
                                type="email"
                                id="form2Example1"
                                className="form-control"
                                placeholder="email"
                            />
                        </div>

                        <div className="form-outline mb-4">
                            <input
                                type="password"
                                id="form2Example2"
                                className="form-control"
                                placeholder="password"
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <input
                                id="form2Example1"
                                className="form-control"
                                placeholder="Prenume"
                            />
                        </div>
                        <div className="form-outline mb-4">
                            <input
                                type="email"
                                id="form2Example1"
                                className="form-control"
                                placeholder="Nume"
                            />
                        </div>

                        <button
                            type="button"
                            className="btn btn-primary btn-block"
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
