import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await fetch("http://localhost:3000/user/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!res.ok) throw "Internal Server Error!";
      const data = await res.json();
      localStorage.setItem("access_token", data.token);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-white text-dark"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4 pb-5">
                    <h2 className="fw-bold mb-2">Welcome to To Do List</h2>
                    <p>
                      Please sign-in to your account, and start manage further
                    </p>
                    <br />
                    <h2 className="fw-bold mb-2 text-uppercase">Sign In</h2>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label">Username :</label>
                      <input
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        type="text"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        placeholder="Your registered username"
                      />
                    </div>
                    <div className="form-outline form-white mb-4">
                      <label className="form-label">Password :</label>
                      <input
                        name="password"
                        value={user.password}
                        onChange={handleChange}
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        placeholder="*****"
                      />
                    </div>
                    <br />
                    <button
                      className="btn btn-outline-light btn-lg px-5 bg-dark text-white"
                      type="submit"
                    >
                      Sign In
                    </button>
                    <br /> <br />
                    <div>
                      <span>Don't have an account yet?</span>
                      <Link to="/register">Sign Up</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
}

export default LoginPage;
