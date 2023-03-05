import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    phoneNumber: "",
    email: "",
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
      const res = await fetch(
        "http://localhost:3000/user/register",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      if (!res.ok) throw "Internal Server Error!";
      await res.json();
      navigate("/");
      setUser({
        name: "",
        phoneNumber: "",
        email: "",
        username: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <section className="gradient-custom">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-white text-dark"
                style={{ borderRadius: "1rem" }}
              >
                <div className="card-body p-5 text-center">
                  <div className="mb-md-5 mt-md-4">
                    <h2 className="fw-bold mb-2">
                      Welcome to To Do List
                    </h2>
                    <p>Please sign-in to your account, and start manage further</p>
                    <br />
                    <h2 className="fw-bold mb-2">Sign Up</h2>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typeName">
                        Name :
                      </label>
                      <input
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        type="text"
                        id="typeName"
                        className="form-control form-control-lg"
                        placeholder="Your Name"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typePhonenumber">
                        Phone Number :
                      </label>
                      <input
                        name="phoneNumber"
                        value={user.phoneNumber}
                        onChange={handleChange}
                        type="tel"
                        id="typePhonenumber"
                        className="form-control form-control-lg"
                        placeholder="+62"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typeEmailX">
                        Email :
                      </label>
                      <input
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        placeholder="example@mail.com"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typeUsername">
                        Username :
                      </label>
                      <input
                        name="username"
                        value={user.username}
                        onChange={handleChange}
                        type="text"
                        id="typeUsername"
                        className="form-control form-control-lg"
                        placeholder="Your username"
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                        Password :
                      </label>
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
                      Sign Up
                    </button>
                  </div>
                  <div>
                    <span>
                     Already have an account?
                       </span>
                    <Link to='/'> 
                       Login
                    </Link>
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

export default RegisterPage;
