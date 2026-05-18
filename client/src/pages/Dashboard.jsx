import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Dashboard() {

  const navigate = useNavigate();

  const [projectTitle, setProjectTitle] =
    useState("");

  const [projectDescription,
    setProjectDescription] =
    useState("");

  const [taskTitle, setTaskTitle] =
    useState("");

  const [tasks, setTasks] =
    useState([]);

  const goDashboard = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  const goProjects = () => {

    const section =
      document.getElementById("projects");

    section.scrollIntoView({
      behavior: "smooth",
    });

  };

  const goTasks = () => {

    const section =
      document.getElementById("tasks");

    section.scrollIntoView({
      behavior: "smooth",
    });

  };

  const openProfile = () => {

    navigate("/profile");

  };

  const logoutUser = () => {

    localStorage.removeItem("token");

    navigate("/login");

  };

  const createProject = async () => {

    try {

      await axios.post(
        "https://team-task-manager-production-6f19.up.railway.app/api/projects",
        {
          title: projectTitle,
          description: projectDescription,
        }
      );

      alert("Project Created Successfully");

      setProjectTitle("");
      setProjectDescription("");

    } catch (error) {

      alert("Error Creating Project");

    }
  };

  const createTask = async () => {

    try {

      await axios.post(
        "https://team-task-manager-production-6f19.up.railway.app/api/tasks",
        {
          title: taskTitle,
          status: "Pending",
        }
      );

      alert("Task Created Successfully");

      setTaskTitle("");

      getTasks();

    } catch (error) {

      alert("Error Creating Task");

    }
  };

  const getTasks = async () => {

    const res = await axios.get(
      "https://team-task-manager-production-6f19.up.railway.app/api/tasks"
    );

    setTasks(res.data);
  };

  const updateStatus = async (id) => {

    await axios.put(
      `https://team-task-manager-production-6f19.up.railway.app/api/tasks/${id}`,
      {
        status: "Completed",
      }
    );

    getTasks();
  };

  const deleteTask = async (id) => {

    await axios.delete(
      `https://team-task-manager-production-6f19.up.railway.app/api/tasks/${id}`
    );

    getTasks();
  };

  useEffect(() => {

    getTasks();

  }, []);

  return (

    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f3f5f9",
        fontFamily: "Arial",
      }}
    >

      <div
        style={{
          width: "240px",
          background:
            "linear-gradient(to bottom, #0f172a, #172554)",
          color: "white",
          padding: "30px 20px",
          position: "fixed",
          height: "100vh",
        }}
      >

        <h1
          style={{
            fontSize: "28px",
            marginBottom: "40px",
          }}
        >
          Team Task Manager
        </h1>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            fontSize: "18px",
          }}
        >

          <div
            onClick={goDashboard}
            style={{
              cursor: "pointer",
            }}
          >
            🏠 Dashboard
          </div>

          <div
            onClick={goProjects}
            style={{
              cursor: "pointer",
            }}
          >
            📁 Projects
          </div>

          <div
            onClick={goTasks}
            style={{
              cursor: "pointer",
            }}
          >
            ✅ Tasks
          </div>

          <div
            onClick={openProfile}
            style={{
              cursor: "pointer",
            }}
          >
            👤 Profile
          </div>

          <div
            onClick={logoutUser}
            style={{
              cursor: "pointer",
            }}
          >
            🚪 Logout
          </div>

        </div>

      </div>

      <div
        style={{
          flex: 1,
          padding: "30px",
          marginLeft: "260px",
        }}
      >

        <div
          style={{
            background:
              "linear-gradient(to right, #4f46e5, #7c3aed)",
            borderRadius: "20px",
            padding: "25px",
            color: "white",
            marginBottom: "30px",
          }}
        >

          <h1
            style={{
              marginBottom: "10px",
            }}
          >
            Welcome User 👋
          </h1>

          <p>
            Manage Projects & Tasks Efficiently
          </p>

        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "25px",
            marginBottom: "30px",
          }}
        >

          <div
            id="projects"
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              boxShadow:
                "0 4px 15px rgba(0,0,0,0.08)",
            }}
          >

            <h2
              style={{
                marginBottom: "20px",
                color: "#1e293b",
              }}
            >
              Create Project
            </h2>

            <input
              value={projectTitle}
              placeholder="Project Title"
              onChange={(e) =>
                setProjectTitle(e.target.value)
              }
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #d1d5db",
                marginBottom: "15px",
                boxSizing: "border-box",
                fontSize: "15px",
              }}
            />

            <textarea
              value={projectDescription}
              placeholder="Project Description"
              onChange={(e) =>
                setProjectDescription(
                  e.target.value
                )
              }
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #d1d5db",
                marginBottom: "15px",
                minHeight: "120px",
                resize: "none",
                boxSizing: "border-box",
                fontSize: "15px",
              }}
            />

            <button
              onClick={createProject}
              style={{
                width: "100%",
                padding: "14px",
                border: "none",
                borderRadius: "12px",
                background:
                  "linear-gradient(to right, #2563eb, #06b6d4)",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Create Project
            </button>

          </div>

          <div
            style={{
              background: "white",
              borderRadius: "20px",
              padding: "25px",
              boxShadow:
                "0 4px 15px rgba(0,0,0,0.08)",
              height: "fit-content",
            }}
          >

            <h2
              style={{
                marginBottom: "20px",
                color: "#1e293b",
              }}
            >
              Create Task
            </h2>

            <input
              value={taskTitle}
              placeholder="Task Title"
              onChange={(e) =>
                setTaskTitle(e.target.value)
              }
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "12px",
                border: "1px solid #d1d5db",
                marginBottom: "15px",
                boxSizing: "border-box",
                fontSize: "15px",
              }}
            />

            <button
              onClick={createTask}
              style={{
                width: "100%",
                padding: "14px",
                border: "none",
                borderRadius: "12px",
                background:
                  "linear-gradient(to right, #16a34a, #22c55e)",
                color: "white",
                fontWeight: "bold",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Create Task
            </button>

          </div>

        </div>

        <div
          id="tasks"
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "25px",
            boxShadow:
              "0 4px 15px rgba(0,0,0,0.08)",
          }}
        >

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >

            <h2
              style={{
                color: "#1e293b",
              }}
            >
              Task List
            </h2>

            <div
              style={{
                background: "#7c3aed",
                color: "white",
                padding: "10px 18px",
                borderRadius: "30px",
                fontWeight: "bold",
              }}
            >
              Total Tasks: {tasks.length}
            </div>

          </div>

          {
            tasks.map((task, index) => (

              <div
                key={task.id}
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                  padding: "18px",
                  border: "1px solid #e5e7eb",
                  borderRadius: "15px",
                  marginBottom: "15px",
                  flexWrap: "wrap",
                  gap: "15px",
                }}
              >

                <div>

                  <h3
                    style={{
                      marginBottom: "5px",
                      color: "#111827",
                    }}
                  >
                    {index + 1}. {task.title}
                  </h3>

                  <span
                    style={{
                      padding: "6px 12px",
                      borderRadius: "20px",
                      fontSize: "14px",
                      background:
                        task.status ===
                        "Completed"
                          ? "#dcfce7"
                          : "#fef3c7",
                      color:
                        task.status ===
                        "Completed"
                          ? "green"
                          : "orange",
                    }}
                  >
                    {task.status}
                  </span>

                </div>

                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >

                  <button
                    onClick={() =>
                      updateStatus(task.id)
                    }
                    style={{
                      padding: "10px 16px",
                      border: "none",
                      borderRadius: "10px",
                      background: "#facc15",
                      color: "white",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Complete
                  </button>

                  <button
                    onClick={() =>
                      deleteTask(task.id)
                    }
                    style={{
                      padding: "10px 16px",
                      border: "none",
                      borderRadius: "10px",
                      background: "#ef4444",
                      color: "white",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>

                </div>

              </div>
            ))
          }

        </div>

      </div>

    </div>
  );
}

export default Dashboard;