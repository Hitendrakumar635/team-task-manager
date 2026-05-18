import { useState } from "react";

import axios from "axios";

import {
  useNavigate,
  Link,
} from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const loginUser = async () => {

    try {

      const res = await axios.post(
        "https://team-task-manager-production-6f19.up.railway.app/api/auth/login",
        {
          email,
          password,
        }
      );

      localStorage.setItem(
        "token",
        res.data.token
      );

      alert("Login Successful");

      window.location.href =
        "/dashboard";

    } catch (error) {

      console.log(error);

      alert("Invalid Credentials");

    }
  };

  return (

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        background:
          "linear-gradient(to right, #4f46e5, #7c3aed)",
        fontFamily: "Arial",
      }}
    >

      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          width: "350px",
          boxShadow:
            "0 4px 20px rgba(0,0,0,0.2)",
        }}
      >

        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#1e293b",
          }}
        >
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setEmail(e.target.value)
          }
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "15px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) =>
            setPassword(e.target.value)
          }
          style={{
            width: "100%",
            padding: "14px",
            marginBottom: "20px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            boxSizing: "border-box",
          }}
        />

        <button
          onClick={loginUser}
          style={{
            width: "100%",
            padding: "14px",
            background:
              "linear-gradient(to right, #2563eb, #06b6d4)",
            border: "none",
            borderRadius: "10px",
            color: "white",
            fontWeight: "bold",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Login
        </button>

        <p
          style={{
            marginTop: "20px",
            textAlign: "center",
          }}
        >
          Don't have an account?
          {" "}

          <Link
            to="/signup"
            style={{
              color: "#2563eb",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Signup
          </Link>

        </p>

      </div>

    </div>
  );
}

export default Login;