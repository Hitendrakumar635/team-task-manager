import { useState } from "react";
import axios from "axios";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signupUser = async () => {

    try {

      await axios.post(
        "team-task-manager-production-6f19.up.railway.app/api/auth/signup",
        {
          name,
          email,
          password,
          role: "Member",
        }
      );

      alert("Signup Success");

    } catch (error) {

      alert("Signup Failed");

    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        margin: "100px auto",
        gap: "10px",
      }}
    >

      <h1>Signup</h1>

      <input
        placeholder="Enter Name"
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        placeholder="Enter Email"
        onChange={(e) =>
          setEmail(e.target.value)
        }
      />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) =>
          setPassword(e.target.value)
        }
      />

      <button onClick={signupUser}>
        Signup
      </button>

    </div>
  );
}

export default Signup;